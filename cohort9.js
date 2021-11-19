const post = require('./post.js');
const templates = require('./templates.js');
const S = require('tiny-dedent');

const cohort = 9;
const day = 4;

var users = [
  'Rivet',
  'SailsG',
  'dreamtopia45',
  'keepgettingbackup01',
];

post.submitTemplate({
  prod: true,
  subreddit: 'getdisciplined',
  cohort: cohort,
  day: day,
  users: users,
  templates: templates.days[day],
});
