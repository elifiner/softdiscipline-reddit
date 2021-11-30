(async () => {

const db = require('./db.js');
const cohortX = require('./cohortX.js');

var args = process.argv.slice(2);

if (args[0] == '--inc') {
  var cohort = +args[1];
  await db.incCohort(cohort);
  await db.dump();
}

if (args[0] == '--reset') {
  var cohort = +args[1];
  if (+args[2]) {
    await db.resetCohort(cohort, {day: +args[2]});
  } else {
    await db.resetCohort(cohort);
  }
  await db.dump();
}

if (args[0] == '--empty') {
  await db.empty();
}

if (args[0] == '--dump') {
  await db.dump();
}

if (args[0] == '--set') {
  await db.setCurrent(+args[1]);
  await db.dump();
}

if (args[0] == '--post') {
  await cohortX.postCheckin();
}

})();