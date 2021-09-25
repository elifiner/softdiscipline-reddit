module.exports = {
  checkin: {
    title: ({cohort, day}) => `
[Plan] Soft discipline cohort ${cohort} (day ${day}/7)
`,
    text: ({cohort, day}) => `
It's day ${day} of this 7-day habit building program.

Take a few minutes to reflect on your habit.

It's OK if today didn't quite work out the way you planned it. The most important thing is to learn something every day, be kind to yourself and keep going.

It's also OK if you skipped a day or two - just reflect on the last few days all at once.

So:

1. What habit are you working on?
2. What was your plan?
3. How did it go?
4. Did you feel any resistance?
5. How can you improve your plan for tomorrow?
`,
    comment: ({user}) => `
Hey u/${user}, how's your habit going? Let's see what we can learn today.

1/habit 2/plan 3/result 4/resistance 5/improvement
`,
  }
}