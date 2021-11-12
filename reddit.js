const snoowrap = require('snoowrap');

const reddit = new snoowrap({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  clientId: process.env.APP_ID,
  clientSecret: process.env.APP_SECRET,
  userAgent: 'SoftDiscipline/1.0.0 (https://softdiscipline.com)'
});

reddit.config({
  continueAfterRatelimitError: true,
  requestDelay: 500,
});

module.exports = reddit;
