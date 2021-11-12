const post = require('./post.js');
const templates = require('./templates.js');
const S = require('tiny-dedent');

const cohort = 8;
const day = 3;

var users = [
  'nothingchange1',
  'UnsatisfiedMonk',
  'rimune',
  'Cshark14',
  'miraeanda',
  // 'haunting_evening_893',
  'pzperbag',
  'nameqmark',
  'sushimonster123',
  'Zoara42',
  'lachicaperfecta',
  'Kurgan2208',
  'duffstoic',
  'onethatmeows',
  'asusmaster',
  'dreamtopia45',
  'Generic_DS9',
  'cesaruribe',
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

// post.submitNotifications({
//    submission: 'qm1u2t',
//    users: users,
//    template: templates.last.comment,
//    prod: true,
// });

// const message = ({user}) => S(`
//   Hey u/${user}! Remember to post a plan for your habit (see instructions in the post above).
// `);

// post.submitNotifications({
//   submission: 'qpqswl',
//   users: users,
//   template: message,
//   prod: true,
// });

post.submitTemplate({
  prod: true,
  subreddit: 'getdisciplined',
  cohort: cohort,
  day: day,
  users: users,
  templates: templates.daily,
});
