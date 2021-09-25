const post = require('./post.js');
const templates = require('./templates.js');

const cohort = 4;
const day = 6;
const users = [
  'Wouterr0',           'lucy-lou95',
  'wayne_the_bard',     'Content-Training-183',
  'jmeachie',           'Chrainn',
  'Kdarling1337',       'emrewise',
  'thunder-falcon12',   'Affectionate_Craft_9',
  'blue-jj',            'CyclopeWarrior',
  'sldyvf',             'lightspeedsloth1',
  'Pssychedelicious',   'twotype_astronaut',
  'lucasaas',           'WorshipPotato',
  'The_Chosen_One888',  'Sharique1234',
  'FindingE',           'petey9',
  'rottenconfetti',     'owbun',
  'IIFlickerII',        'YungRok',
  'Ok-Valuable300',     'And-I-Oopeth',
  'aad8i',              'iam_se',
  'Zehnfingerfaultier', 'SDRedditUser',
  'iimys',
  'fluidzero',
];

const prod = process.argv[2] == '--prod';

post.postTemplate({
  prod,
  cohort, day, users,
  subreddit: 'getdisciplined',
  template: templates.checkin,
});