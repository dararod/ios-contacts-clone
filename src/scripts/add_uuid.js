const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const dataAsArray = JSON.parse(data);
const dataWithIds = dataAsArray.map((contact) => ({
  ...contact,
  id: uuidv4(),
}));
const dataWithIdsAsString = JSON.stringify(dataWithIds, ' ', 2);

fs.writeFile('src/static/dumbdata_with_ids.json', dataWithIdsAsString, err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File written with success!');
});
