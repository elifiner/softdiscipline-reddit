S = require('tiny-dedent');

module.exports = {
  launch: {
    comment: ({user}) => S(`
      Hey u/${user}! The next soft discipline cohort is starting today. You're welcome to join!
    `),
  },

  first: {
    comment: ({user}) => S(`
      Hey u/${user}, let's build a plan for your habit. Check out the full post for details.

      1/habit 2/plan 3/time 4/reminder 5/obstacle 6/workaround
    `),
  },

  daily: {
    title: ({cohort, day}) => S(`
      [Plan] Soft discipline cohort ${cohort} (day ${day}/7)
    `),
    text: ({cohort, day}) => S(`
      It's day ${day} of this 7-day habit building program.

      **Take a few minutes to reflect on your habit.**

      It's OK if today didn't quite work out the way you planned it. The most important thing is to learn something every day, be kind to yourself and keep going.

      It's also OK if you skipped a day or two - just reflect on the last few days all at once.

      **Answer these questions below:**

      1. What habit are you working on?
      2. What was your plan?
      3. How did it go?
      4. Did you feel any resistance? What was going through your mind?
      5. How can you improve your approach to your habit?
      6. What's your plan for tomorrow?

      **Improving your approach to your habit is usually about aiming lower, making it easier and working around obstacles. It is rarely about just trying harder.**

      Let's keep it going!

      ...

      PS: Thanks for the [coffee](https://buymeacoffee.com/zoozla) whoever got me some!
    `),
    comment: ({user}) => S(`
      Hey u/${user}, how's your habit going? Let's see what we can learn.

      1/habit 2/plan 3/result 4/resistance 5/improvement 6/tomorrow
    `),
  },

  last: {
    comment: ({user}) => S(`
      Hey u/${user}, our 7-day habit building program is done! It's time to celebrate and reflect on the entire week.

      1/start 2/now 3/insight 4/future
    `),
  }
}