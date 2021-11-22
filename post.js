const reddit = require('./reddit.js');

reddit.config({
  continueAfterRatelimitError: true,
  requestDelay: 5500,
});

async function submitPost({subreddit, title, text, prod}) {
  if (! prod) {
    subreddit = 'zoozla';
  }
  console.log(title.trim(), `r/${subreddit}`);
  return res = await reddit.getSubreddit(subreddit).submitSelfpost({
    title: title,
    text: text,
  });
}

async function submitNotifications({submission, template, cohort, day, users, prod}) {
  // post a notification comment for every user
  console.log(`Submitting ${users.length} comments...`);
  var submission = submission.name ? submission : reddit.getSubmission(submission);
  for (var user of users) {
    if (! user) continue;
    if (! prod) {
      user = 'test-' + user;
    }
    console.log(user);
    await submission.reply(template({user, cohort, day}));
  }
}

async function submitTemplate({subreddit, templates, cohort, day, users, prod}) {
  const submission = await submitPost({
    subreddit: subreddit,
    title: templates.title({cohort, day}),
    text: templates.text({cohort, day}),
    prod: prod
  });
  if (templates.comment) {
    await submitNotifications({
      submission: submission,
      template: templates.comment,
      users: users,
      prod: prod,
      cohort: cohort,
      day: day
    });
  }
}

module.exports = {
  submitPost,
  submitNotifications,
  submitTemplate,
}
