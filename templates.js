S = require('tiny-dedent');

var templates = {
  first: {
    title: ({cohort, day}) => S(`
      [Method] Build a study, sleep or exercise habit in 7 days (soft discipline cohort #${cohort})
    `),

    text: ({cohort, day}) => S(`
      **It's another week and another chance to get your life back on track.**

      Whether you want to fall sleep earlier, wake up at dawn, exercise every day or study consistently - this 7 day program should help you do it.

      It doesn't matter if you've tried it all before. It doesn't matter if you think you're irreparably lazy, unmotivated or anxious.

      This method works by starting small, adjusting daily, staying accountable and treating yourself with kindness and compassion.

      The only way to fail is to stop trying.

      The only requirement is to show up every day and report on how you're doing, even if it's not going well.

      ...

      **We'll do 7 daily check-ins.**

      Every day for the next 7 days, I'll post a post [like this one](https://www.reddit.com/r/getdisciplined/comments/ptqktc/plan_soft_discipline_cohort_4_day_47/) tagging the names of everyone who registered for the cohort.

      You'll spend a few minutes reflecting on how your habit is going and I'll help you navigate any challenge you face.

      I'll never judge you and I won't let anyone else judge you here either. Everyone joining the program fails to stick to their habits at first. It's how we learn. You're not alone.

      ...

      **To join the cohort you need to do two things:**

      1. Fill out the form at [https://softdiscipline.com/cohort](https://softdiscipline.com/cohort) to register for daily notifications.

      2. Post a comment below and describe your plan to tackle your habit for tomorrow:

          - What are you planning to do?
          - When are you planning to do it?
          - How will your remember to do it?
          - What can prevent you from doing it?
          - What can help you do it?

      I'll comment on your plan and help you refine it so it's easier to do. We are going for consistency, not intensity and we have 7 days to build this up - so let's start small.

      ...

      If you'd like to adjust your sleep schedule, read this:

      https://www.reddit.com/comments/pv4tz6/sleep

      If you have too much to do and don't know where to start, read this:

      https://reddit.com/r/getdisciplined/comments/ph02z9/gtd

      If you'd like to know more about the method, read this:

      https://reddit.com/r/getdisciplined/comments/orjzxg/16_ideas

      ...

      Post your plan below.

      **Let's do this.**
    `),

    comment: ({cohort, day, user}) => S(`
      Hey u/${user}, soft discipline cohort #${cohort} is starting today. Check out the post above for instructions.
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
    comment: ({cohort, day, user}) => S(`
      Hey u/${user}, how's your habit going? How are you feeling?

      1/habit 2/plan 3/result 4/resistance 5/improvement 6/tomorrow
    `),
  },

  last: {
    title: ({cohort, day}) => S(`
      [Plan] Soft discipline cohort #${cohort} (day ${day}/7 - last day!)
    `),
    text: ({cohort, day}) => S(`
      **It's done!**

      Thanks so much for taking part in this cohort. It's been a privilege to walk with you on this path.

      It may seem you're not there yet, and that there's a lot more work to do. From the top of this hill we climbed together we can see higher mountains we still need to climb.

      But before we put our proverbial backpacks back on and continue on our journey of self improvement, let's take a few minutes to acknowledge the work we've done **in just 7 days**.

      1. Take a look at the first comment you posted at the start of this cohort. That's where you were then.

      2. Now take stock of where you are now. What's different about you? What can you do now that you couldn't before?

      3. How did this process help you? Was there a moment or an insight that made all the difference?

      ...

      For some of you it's the beginning of a wonderful journey of self discovery. For others, it's just another step.

      While it's possible to build a single habit in a week, a disciplined life is more than just a collection of habits.

      **Truly disciplined people can consistently do whatever they set their mind to do without resistance, anxiety or hesitation.**

      I'm working on a full discipline building program that will help you become such a person. DM me for details.

      **Thank you!**
    `),
    comment: ({cohort, day, user}) => S(`
      Hey u/${user}, our 7-day habit building program is done. Let's reflect on the entire week. It's OK if you're not where you wanted to be - it's still helpful to take stock and appreciate what you've learned. Take a look at the post above for some instructions.

      1/start 2/now 3/insights
    `),
  }
}

templates.days = {
  1: templates.first,
  2: templates.daily,
  3: templates.daily,
  4: templates.daily,
  5: templates.daily,
  6: templates.daily,
  7: templates.last,
};

module.exports = templates;