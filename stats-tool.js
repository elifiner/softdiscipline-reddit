(async() => {

const r = require('./reddit.js');
const axios = require('axios');
const moment = require('moment');

var comments = await r.getUser('zoozla').getComments().fetchAll();

console.log(comments.length);

var countByDate = {};
var autoByDate = {};
var wordsByDate = {};

for (var c of comments) {
  var date = moment.unix(c.created_utc).format('YYYY-MM-DD');
  var tagged = !! c.body.match(/u\/([^ ,]+)/);
  if (! tagged) {
    countByDate[date] = (countByDate[date] || 0) + 1;
    wordsByDate[date] = (wordsByDate[date] || 0) + c.body.split(/\s/).length;
  } else {
    autoByDate[date] = (autoByDate[date] || 0) + 1;
  }
}

for (var [date, count] of Object.entries(countByDate)) {
  console.log(date, count, wordsByDate[date]);
}

})();