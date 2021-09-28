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

async function submitPost({subreddit, title, text, prod}) {
  if (! prod) {
    subreddit = 'zoozla';
  }

  const reddit = await connect();

  // post main article
  console.log(title.trim(), `r/${subreddit}`);
  var res = await reddit.post('/api/submit', {
    sr: subreddit,
    kind: 'self',
    title: title,
    text: text,
  });

  return res.json.data.id;
}

async function submitNotifications({postId, template, users, prod}) {
  // post a notification comment for every user
  console.log(`Submitting ${users.length} comments...`);
  const reddit = await connect();
  for (var user of users) {
    if (! user) continue;
    if (! prod) {
      user = 'test-' + user;
    }
    console.log(user);
    res = await reddit.post('/api/comment', {
      thing_id: 't3_'+postId,
      text: template({user}),
    });
    await delay(5000);
  }
}

async function submitTemplate({subreddit, templates, cohort, day, users, prod}) {
  const postId = await submitPost({
    subreddit: subreddit,
    title: templates.title({cohort, day}),
    text: templates.text({cohort, day}),
    prod: prod
  });
  await submitNotifications({
    postId: postId,
    template: templates.comment,
    users: users,
    prod: prod
  });
}

async function ping(postId) {
    // res = await reddit.post('/api/comment', {
    //   thing_id: 't3_'+postId,
    //   text: template({user}),
    // });
    // await delay(5000);
    
}

module.exports = {
  submitPost,
  submitNotifications,
  submitTemplate,
  ping,
}
