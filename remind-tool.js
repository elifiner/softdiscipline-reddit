(async() => {

const r = require('./reddit.js');
const S = require('tiny-dedent');

var postId = 'qra1zk';
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
    // await comment.reply(S(`
    //   Hey u/${tagged}, are you doing OK? This is a  quick reminder to check in about your habit. It's OK if you forgot or didn't have time or if it isn't going well. We'll work through it together.
    // `));
    // await comment.reply(S(`
    //   Hey u/${tagged}, how is your habit is going?
    // `));
  }
}
})();