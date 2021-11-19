const post = require('./post.js');
const templates = require('./templates.js');
const S = require('tiny-dedent');

const cohort = 8;
const day = 7;

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

post.submitTemplate({
  prod: true,
  subreddit: 'getdisciplined',
  cohort: cohort,
  day: day,
  users: users,
  templates: templates.days[day],
});
