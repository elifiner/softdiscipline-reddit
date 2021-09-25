const post = require('./post.js');
const templates = require('./templates.js');

const cohort = 5;
const day = 1;
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

const prod = process.argv[2] == '--prod';

post.postTemplate({
  prod,
  cohort, day, users,
  subreddit: 'getdisciplined',
  template: templates.checkin,
});