const snoowrap = require('snoowrap');

const reddit = new snoowrap({
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD,
  clientId: process.env.REDDIT_APP_ID,
  clientSecret: process.env.REDDIT_APP_SECRET,
  userAgent: 'SoftDiscipline/1.0.0 (https://softdiscipline.com)'
});

reddit.config({
  continueAfterRatelimitError: true,
  requestDelay: 500,
});

module.exports = reddit;
