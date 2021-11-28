const Database = require("@replit/database");

const db = new Database();
var args = process.argv.slice(2);

if (args[0] == '--set') {
  db.set('test', {name: 'Eli', age: 41}).then(() => {});
}

if (args[0] == '--list') {
  db.list().then(keys => {
    for (var key of keys) {
      var value = db.get(key).then(value => {
        value = JSON.stringify(value);
        console.log(`${key}: ${value}`);
      })
    }
  })
}

