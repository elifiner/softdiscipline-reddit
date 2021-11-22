const post = require('./post.js');
const templates = require('./templates.js');

const cohort = 7;
const day = 6;

var users = [
 // 'amusingjones',
  'scrabble4',
  'thinathinakuTHINA',
  'soberneverover',
  'Zululoumi',
  'uneedsomediscipline',
];

// users = [
//  'zoozla1',
// ]

// post.submitNotifications({
//   submission: 'qbszx3',
//   users: users,
//   template: templates.first.comment,
//   prod: true,
// });

post.submitNotifications({
   submission: 'qm1u2t',
   users: users,
   template: templates.last.comment,
   prod: true,
});

/*post.submitTemplate({
  prod: true,
  subreddit: 'getdisciplined',
  cohort: cohort,
  day: day,
  users: users,
  templates: templates.daily,
});*/
