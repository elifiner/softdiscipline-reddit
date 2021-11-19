(async() => {
const reddit = require('./reddit.js');
const moment = require('moment');
const fs = require('fs');
const S = require('tiny-dedent');

async function compileThread(username) {
  var comments = await reddit.getUser(username).getComments({limit: 1000}).fetchAll();

  var thread = [];

  for (var comment of comments) {
    // find soft discipline comment
    if (comment.subreddit_name_prefixed === 'r/getdisciplined' && comment.link_title.match(/soft discipline/i)) {
      comment = await comment.expandReplies();

      // find my reply and add both their comment and my reply
      for (var reply of comment.replies) {
        if (reply.author.name === 'zoozla') {
          thread.unshift({
            title: reply.link_title,
            author: reply.author.name,
            body: reply.body,
            created: reply.created,
          });
        }
      }
      thread.unshift({
        title: comment.link_title,
        author: comment.author.name,
        body: comment.body,
        created: comment.created,
      });
    }
  }

  if (thread.length) {
    const filename = `threads/${username}.md`
    fs.writeFileSync(filename, '');
    for (var message of thread) {
      var time = moment.unix(message.created).format('YYYY-MM-DD HH:mm');
      body = message.body.replace(/\n/g, '\n> ');
      fs.appendFileSync(filename, S(`
        <sub>*${time}*</sub>
        **${message.author}**
        > ${body}
      `) + '\n');
    }
    console.log(`Thread written to ${filename}`);
  }
}

if (! process.argv[2]) {
  console.log(`usage: node thread-tools.js <username> [<username>]`);
  process.exit(1);
}

for (var username of process.argv.slice(2)) {
  console.log(username);
  await compileThread(username);
}

})();