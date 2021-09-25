var userLinks = `
https://www.reddit.com/user/jus-doit/
https://www.reddit.com/user/Gruppenzwang/
https://www.reddit.com/user/CarefulPrinciple/
https://www.reddit.com/user/Jasmine_Erotica/
https://www.reddit.com/user/New_Reflection_0000/
https://www.reddit.com/user/rajansh213/
https://www.reddit.com/user/bunkywhitegirl/
https://www.reddit.com/user/Marianne06/
https://www.reddit.com/user/Constablegarden/
https://www.reddit.com/user/jinglefingles/
https://www.reddit.com/user/Nihilist_monkey/
https://www.reddit.com/user/SnooCats196/
`

const ignoreUsers = `
zoozla
FelEdorath
arthurf
TheCourageWolf
AutoModerator
imworkiniswear
PeaceH
Walls
`.split(/\s*\n\s*/).filter((v) => v);

var users = userLinks
  .split(/\s*\n\s*/)
  .filter((v) => v)
  .map((v) => v.match(/\/(.[^/]+)\/$/)[1])
  .filter((v) => ! ignoreUsers.includes(v));
users = [...new Set(users)];

console.log(users);