const Database = require("@replit/database");

const db = new Database();
const maxDays = 7;

async function getCurrent() {
  return await db.get(`current`);
}

async function setCurrent(cohort) {
  return await db.set(`current`, cohort);
}

async function getCohort(cohort) {
  return await db.get(`cohort-${cohort}`) || {day: 1};
}

async function incCohort(cohort) {
  var data = await getCohort(cohort);
  if (data.day < maxDays) {
    data.day += 1;
  } else {
    data.done = true;
  }
  await db.set(`cohort-${cohort}`, data);
  return data;
}

async function resetCohort(cohort, data) {
  await db.delete(`cohort-${cohort}`);
  if (data) {
    await db.set(`cohort-${cohort}`, data);
  }
}

async function empty() {
  await db.empty();
}

async function dump() {
  var keys = await db.list();
  for (var key of keys) {
    var value = JSON.stringify(await db.get(key));
    console.log(`${key}: ${value}`);
  }
}

module.exports = {
  getCohort,
  incCohort,
  resetCohort,
  setCurrent,
  getCurrent,
  empty,
  dump
}