const post = require('./post.js');
const templates = require('./templates.js');

const cohort = 5;
const day = 6;

var users = [
  '\\_blackpython\\_',
  'ForceForFiction',
  'guardian-echo',
  'Steveshormonemonster',
  'darthvedder97',
  'swaniljadav',
  'Dilf_69',
  'Personofinterest',
  'Teekayz9',
  'yigitaga32',
  'sau0201',
  // 'DrowsyFoxGames',
  'Jasmine_erotica',
  'Erren-h',
  'miss_winky',
  'nikisoaradot',
  'Gruppenzwang',
  'gigglesnshit4brain',
  'globe_master11',
  'Boogalamoon',
  'williamshatnersvoice',
  'Enchantedtikirum',
  'hsjjhamb',
  'Apple22over7',
  'Noidea',
  'Astaroth1993',
  'iRuby',
  'nikiki_',
  'lolr556',
  'resistantBacteria',
  'nefifty',
  'Itmos',
  'One_Elephant_8506',
  'dogstracted',
  'Thrwawayduhh',
  'Angleree',
  'No_Smile_7015',
  'problematicadult',
  'fightingforitall',
  'auspiciousmutation',
  'arya1225',
  'Samesh',
  'hendadson',
  'Pelicanlovingredwood',
  'smynsees',
  'th1ng-1n-1tself',
  'Iribi',
  'Bayleef',
  'MusicPsychFitness',
  'gwen-gwen',
  'Prof_dumblewhore',
  'CarefulPrinciple',
  'is-this_real-life',
  'eternallyawake',
  'mommyOG',
  // 'sharkiemcsharkshark',
  'Redd_Woif',
  'red_read10',
  'MrDev_R',
  'Bobbymcbob99',
  // 'Keystone-Habit',
  'rishigohil',
  'CyclopeWarrior',
  'No_Papaya_1931',
  'reveriewinter',
  'bluegenester',
  'Winterscape',
  'gingergale314',
  'New_Reflection_0000',
  'fluidzero',
  'FloofyKenda',
  'rinaaay',
  'ignoringrealityy',
  'dunnbass ',
  'blinx_x',
  'Dull_abroad',
  'FriendlyManner',
  'PreguntandoCamino',
];

// users = [
//   'zoozla1',
// ]

post.submitNotifications({
  postId: 'q164ni',
  users: users,
  template: templates.last.comment,
  prod: true,
});

// post.submitTemplate({
//   prod: true,
//   cohort: cohort,
//   day: day,
//   users: users,
//   subreddit: 'getdisciplined',
//   templates: templates.daily,
// });