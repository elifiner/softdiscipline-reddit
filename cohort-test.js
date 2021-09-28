const post = require('./post.js');
const templates = require('./templates.js');

const cohort = 4;
const day = 5;
const users = [
  'zoozla1',
  'zoozla2',
  'zoozla3',
];

const prod = process.argv[2] == '--prod';

// post.submitTemplate({
//   prod,
//   cohort, day, users,
//   subreddit: 'getdisciplined',
//   templates: templates.checkin,
// });

post.submitNotifications({
  postId: 'pvojtd',
  users,
  template: templates.checkin.comment,
  prod,
})