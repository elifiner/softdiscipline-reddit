(async() => {

const snoowrap = require('snoowrap');
const S = require('tiny-dedent');

const r = new snoowrap({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  clientId: process.env.APP_ID,
  clientSecret: process.env.APP_SECRET,
  userAgent: 'SoftDiscipline/1.0.0 (https://softdiscipline.com)'
});

var postId = 'pwpamu';
var automationUser = 'zoozla';

// get submission with all comments
const res = await r.getSubmission(postId).expandReplies({limit: Infinity, depth: Infinity});

for (var comment of res.comments) {
  if (! comment.author == automationUser) continue;

  // get tagged user or abort
  var tagged = comment.body.match(/u\/([^ ,]+)/);
  if (! tagged) continue;
  tagged = tagged[1];

  // find if tagged user replied
  var replied = false;
  for (var reply of comment.replies) {
    if (tagged.toLowerCase() === reply.author.name.toLowerCase()) {
      replied = true;
    }
  }

  // find if tagged user was reminded already
  var reminded = false;
  for (var reply of comment.replies) {
    if (reply.author.name == automationUser) {
      reminded = true;
    }
  }

  // add a reminder comment if they didn't reply
  if (! replied && ! reminded) {
    console.log(`Pinging ${tagged}`);
    await comment.reply(S(`
      Are you doing OK, u/${tagged}? Let's talk, even if your habit isn't going well.
    `));
  }
}
})();