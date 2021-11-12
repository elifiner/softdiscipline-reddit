S = require('tiny-dedent');

module.exports = {
  launch: {
    comment: ({user}) => S(`
      Hey u/${user}! The next soft discipline cohort is starting today. Check out the full post for instructions on how to join.
    `),
  },

  first: {
    title: ({cohort, day}) => S(`
      [Plan] Soft discipline cohort #${cohort} (day ${day}/7)
    `),

    text: ({cohort, day}) => S(`
    Hey guys,

    **Welcome to the soft discipline habit building program.**

    We're going to spend the next 7 days building just one habit. The goal is to create something sustainable, that requires as little effort as possible and fits your life and personal style.

    I'll post a check-in post like this one every day and tag everyone who registered.

    Do your best to post an update every day - especially if things aren't going well. I know it can be embarassing, but that's the only way I can help you fix whatever is broken. If you feel especially awkward, you can send me an update in private via DM.

    We'll start by making a plan that you'll try to follow tomorrow (or today if your day is just starting). We'll then check-in every day to see how the habit is going, adjust the plan and try again. It's a simple approach, but because of the daily cadence it can be very significant.

    I will never judge you, shame you or push you in any way and I won't let anyone else do it either. This is a learning process and any failure, however unpleasant, is just success in progress.

    ...

    **So, let's make a plan, just for tomorrow.**

    Answer the following quick questions in a comment below:

    1. What's you habit?
    2. What are you planning to do *tomorrow*?
    3. When are you planning to do it?
    4. How will you remember to do it?
    5. What can keep you from doing it?
    6. How can you work around that?

    After you answer the questions, summarize your plan in short bullet points so both you and I are clear on what you intend to do.

    ...

    **Try to make a plan you can stick to without effort.**

    Your ambition is awesome in the long run, but if you aim too high in the short run you'll just burn out. So choose an initial goal that feels ridiculously easy and that you can do with minimal resistance.

    * If you are working on your sleep patterns, take a look a the [sleep schedule plan](https://www.reddit.com/r/getdisciplined/comments/pv4tz6/method_fix_your_sleep_schedule_for_good_with_soft/?utm_source=share&utm_medium=web2x&context=3) and start with stabilizing your sleep schedule.
    * If you are building an exercise habit, aim for a very easy workout that will leave you wanting more.
    * If you are learning how to get things done, make a short list of tasks you feel confident you can do tomorrow, regardless of how much you think you *need* to do. Take a look a the [getting things done plan](https://www.reddit.com/r/getdisciplined/comments/ph02z9/method_feeling_overwhelmed_with_all_the_things/?utm_source=share&utm_medium=web2x&context=3) for inspiration and guidance on how to prioritize.

    ...

    This is it. We're ready for launch.

    Good luck everyone!
    `),

    comment: ({user}) => S(`
      Hey u/${user}, let's build a plan for your habit. Check out the full post for details.

      1/habit 2/plan 3/time 4/reminder 5/obstacle 6/workaround
    `),
  },

  daily: {
    title: ({cohort, day}) => S(`
      [Plan] Soft discipline cohort #${cohort} (day ${day}/7)
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

      Let's keep it up!
    `),
    comment: ({user}) => S(`
      Hey u/${user}, how's your habit going? How are you feeling?

      1/habit 2/plan 3/result 4/resistance 5/improvement 6/tomorrow
    `),
  },

  last: {
    comment: ({user}) => S(`
      Hey u/${user}, our 7-day habit building program is done and it's time to reflect on the entire week. It's OK if you're not where you wanted to be. It's still helpful to take stock and appreciate what you've learned. Take a look at the post above for some more instructions.

      1/start 2/now 3/insight 4/future
    `),
  }
}