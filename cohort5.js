const post = require('./post.js');

const cohort = 4;
const day = 5;
const users = [
  'jus-doit',
  'Gruppenzwang',
  'CarefulPrinciple',
  'Jasmine_Erotica',
  'New_Reflection_0000',
  'rajansh213',
  'bunkywhitegirl',
  'Marianne06',
  'Constablegarden',
  'jinglefingles',
  'Nihilist_monkey',
  'SnooCats196',
  'nikiki_',
  'Keystone-Habit',
  'is-this_real-life',
  'choirleader',
  'AweYiss',
  'Heheyouregay',
  'Snoo56429',
  'gigglesandshit4brain',
  'PreguntandoCamino',
  'jessigail_01',
  'saleitems',
  'No-Assistant-3317',
  'Thiagoll7',
];

console.log(users.length);

templates = require('./templates.js');

console.log(templates.dayN.title({cohort: 5, day: 2}));

// const prod = process.argv[2] == '--prod';
// post.dailyCheckin({
//   prod: prod,
//   subreddit: 'getdisciplined',
//   cohort: cohort,
//   day: day,
//   users: users,
// });