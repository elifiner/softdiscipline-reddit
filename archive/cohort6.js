const post = require('./post.js');
const templates = require('./templates.js');

const cohort = 6;
const day = 6;

var users = [
  'Frozenlegend13',
  'Calecity',
  'orquideamar',
  'Marianne06',
  'LineODucklings',
  'bunkywhitegirl',
  'maniacmadii',
  'Hampshire_coffee',
  'NicnicAR',
  'captainunderwhelming ',
  'amotleydisposition',
  'badlife123',
  'TeddyEvilTeddy',
  'OldGoldSoftPack',
  'CyclopeWarrior',
  'ojesutomisin',
  'allshipsarecannon',
  'Mr-Mortgages',
  'sammidoesthings',
  'norasaurus',
  'gwen-gwen',
  'Sharique123',
  'No_Smile_7015',
  'UnlimitedJoy7',
  'CarefulPrinciple',
  'jkat76 ',
  'Strubbelkopp',
  'Albatatis',
  'Sharique123',
  'shutuplegs94',
  //'anxiousmedgirl',
  'jojonium9',
  'Fluidzero',
  'tallhotcheeto',
  'TeddyEvilTeddy',
  'CyclopeWarrior',
  'AcceptableGarage2904',
  'tangypepper',
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
  submission: 'qfznja',
  users: users,
  template: templates.last.comment,
  prod: true,
});

// post.submitTemplate({
//   prod: true,
//   subreddit: 'getdisciplined',
//   cohort: cohort,
//   day: day,
//   users: users,
//   templates: templates.daily,
// });
