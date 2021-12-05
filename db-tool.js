(async () => {

const db = require('./db.js');
const cohortX = require('./cohortX.js');

var args = process.argv.slice(2);

if (args[0] == '--inc') {
  var cohort = +args[1];
  await db.incCohort(cohort);
}

if (args[0] == '--reset') {
  var cohort = +args[1];
  if (+args[2]) {
    await db.resetCohort(cohort, {day: +args[2]});
  } else {
    await db.resetCohort(cohort);
  }
}

if (args[0] == '--empty') {
  await db.empty();
}

if (args[0] == '--current') {
  await db.setCurrent(+args[1]);
}

if (args[0] == '--post') {
  await cohortX.postCheckin();
}

await db.dump();

})();