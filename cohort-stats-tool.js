(async() => {

const r = require('./reddit.js');
const moment = require('moment');

var posts = [
  'pvx5ke',
  'pwpamu',
  'pxavi2',
  'py3zpb',
  'pz1pyd',
  'pzq06s',
  'q0br89',
];

function getAllCommentAuthors(obj) {
  var authors = [obj.author.name];
  for (var reply of obj.replies) {
    authors = authors.concat(getAllCommentAuthors(reply));
  }
  return authors;
}

for (var id of posts) {
  var submission = r.getSubmission(id);
  var title = await submission.title;
  var comments = await submission.comments.fetchAll();
  var authors = [];
  for (var comment of comments) {
    authors = authors.concat(getAllCommentAuthors(comment));
  }
  authors = new Set(authors);
  authors.delete('zoozla');
  console.log(title, authors.size, 'authors');
  console.log(authors);
}

})();