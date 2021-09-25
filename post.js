const Reddit = require('reddit');
const delay = ms => new Promise(res => setTimeout(res, ms));

async function connect() {
  return new Reddit({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    appId: process.env.APP_ID,
    appSecret: process.env.APP_SECRET,
    userAgent: 'SoftDiscipline/1.0.0 (https://softdiscipline.com)'
  });  
}

async function dailyCheckin({subreddit, cohort, day, users, prod}) {

  if (! (subreddit && cohort && day && users)) {
    throw 'error: Missing arguments';
  }

  const reddit = await connect();

  if (!prod) {
    subreddit = 'zoozla';
  }

  const postTitle = `[Plan] Soft discipline cohort ${cohort} (day ${day}/7)`;

  const postText = `
It's day ${day} of this 7-day habit building program.

Take a few minutes to reflect on your habit.

It's OK if today didn't quite work out the way you planned it. The most important thing is to learn something every day, be kind to yourself and keep going.

It's also OK if you skipped a day or two - just reflect on the last few days all at once.

So:

1. What habit are you working on?
2. What was your plan?
3. How did it go?
4. Did you feel any resistance?
5. How can you improve your plan for tomorrow?
  `;

  const commentText = (user) => `
Hey u/${user}, how's your habit going? Let's see what we can learn today.

1/habit 2/plan 3/result 4/resistance 5/improvement
  `;

  // post main article
  console.log(postTitle, `r/${subreddit}`, `${users.length} users`);
  var res = await reddit.post('/api/submit', {
    sr: subreddit,
    kind: 'self',
    title: postTitle,
    text: postText,
  });
  const postId = res.json.data.name;

  // post a notification comment for every user
  for (var user of users) {
    if (!user) continue;
    if (!prod) {
      user = 'test-' + user;
    }
    console.log(user);
    res = await reddit.post('/api/comment', {
      thing_id: postId,
      text: commentText(user),
    });
    await delay(5000);
  }
}

module.exports = {
  dailyCheckin,
}