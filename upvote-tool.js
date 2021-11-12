(async() => {

const snoowrap = require('snoowrap');

var postId = 'qs566t';

users = [
  'zoozla1',
  'zoozla2',
  'zoozla3',
];

password = 'primavera';

for (user of users) {
  await upvote(user, password, postId);
}

async function upvote(username, password, postId) {
  const reddit = new snoowrap({
    username: username,
    password: password,
    clientId: process.env.APP_ID,
    clientSecret: process.env.APP_SECRET,
    userAgent: 'SoftDiscipline/1.0.0 (https://softdiscipline.com)'
  });

  reddit.config({
    continueAfterRatelimitError: true,
    requestDelay: 500,
  });

  const submission = await reddit.getSubmission(postId);
  submission.upvote();
}

})();