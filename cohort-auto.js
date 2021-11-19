const post = require('./post.js');
const templates = require('./templates.js');
const notion = require('./notion.js');
const S = require('tiny-dedent');

(async () => {
  await postCohortCheckin({
    cohort: 9,
    day: 4,
  })
})();

async function postCohortCheckin({cohort, day}) {
  const DATABASE = '19228db15f124f72aaefeede5acc7b01';

  const cohorts = await notion.getOptions({database_id: DATABASE, field: 'Cohort'});
  var cohortName = cohorts.filter((v) => v.match(`cohort ${cohort}`))[0];

  if (! cohortName) {
    throw new Error(`cohort ${cohort} not in the database`);
  }

  var participants = await notion.simpleQuery({
    database_id: DATABASE,
    filter: {
      and: [
        {
          property: 'Cohort',
          select: {
            equals: cohortName,
          },
        },
        {
          property: 'Reddit',
          text: {
            is_not_empty: true,
          },
        }
      ]
    },
  });

  if (participants.length == 0) {
    throw new Error(`no users registered for cohort ${cohort}`);
  }

  const users = participants.map((v) => v.Reddit);

  post.submitTemplate({
    prod: false,
    subreddit: 'getdisciplined',
    cohort: cohort,
    day: day,
    users: users,
    templates: templates.days[day],
  });
}
