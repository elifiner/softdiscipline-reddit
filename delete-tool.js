(async() => {
const Reddit = require('reddit');
const delay = ms => new Promise(res => setTimeout(res, ms));

const reddit = new Reddit({
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD,
  appId: process.env.REDDIT_APP_ID,
  appSecret: process.env.REDDIT_APP_SECRET,
  userAgent: 'SoftDiscipline/1.0.0 (https://softdiscipline.com)'
});

while (true) {
  var res = await reddit.get('/r/zoozla.json');

  if (! res.data.children.length) break;

  console.log(`Deleting ${res.data.children.length} posts...`)

  for (var post of res.data.children) {
    console.log(post.data.name, post.data.title);
    var res = await reddit.post('/api/del', {
      id: post.data.name,
    });
  }
}

})().catch(console.error);

