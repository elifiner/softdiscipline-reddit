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

async function post({subreddit, title, text, commentTemplate, users, prod}) {
  if (! (subreddit && title && text && commentTemplate && users)) {
    throw 'error: Missing arguments';
  }

  if (! prod) {
    subreddit = 'zoozla';
  }

  const reddit = await connect();

  // post main article
  console.log(title, `r/${subreddit}`, `${users.length} users`);
  var res = await reddit.post('/api/submit', {
    sr: subreddit,
    kind: 'self',
    title: title,
    text: text,
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
      text: commentTemplate({user}),
    });
    await delay(5000);
  }  
}

function postTemplate({template, cohort, day, users, prod}) {
  post({
    prod: prod,
    users: users,
    subreddit: 'getdisciplined',
    title: template.title({cohort, day}),
    text: template.text({cohort, day}),
    commentTemplate: template.comment,
  });  
}

module.exports = {
  postTemplate,
}