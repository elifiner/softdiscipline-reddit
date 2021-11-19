(async() => {

const r = require('./reddit.js');
const S = require('tiny-dedent');

var postIds = [
  'qpqswl',
  'qqsnti',
  'qra1zk',
  'qs566t',
  'qst6jn',
];
var automationUser = 'zoozla';

async function getActiveUsers(postId) {
  // get submission with all comments
  const res = await r.getSubmission(postId).expandReplies({limit: Infinity, depth: Infinity});

  var users = [];

  console.log(res.title);

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

    if (replied) {
      users.push(reply.author.name);
    }
  }

  return users;
}

for (postId of postIds) {
  console.log(await getActiveUsers(postId));
}


})();