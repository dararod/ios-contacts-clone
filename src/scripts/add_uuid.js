const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

fs.readFile('src/static/dumbdata.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
}
console.log(data);
});
