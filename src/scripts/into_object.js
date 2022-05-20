const fs = require('fs')

fs.readFile('src/static/dumbdata_with_ids.json', 'utf8', (err, data) => {
  if (err) {
    // eslint-disable-next-line
    console.error(err)
    return
  }

  const database = {}
  const dataAsArray = JSON.parse(data)

  dataAsArray.forEach((el) => (database[el.id] = el))

  const databaseAsString = JSON.stringify(database, ' ', 2)

  fs.writeFile('src/static/dumbdata_object.json', databaseAsString, (err) => {
    if (err) {
      // eslint-disable-next-line
      console.error(err)
      return
    }
    // eslint-disable-next-line
    console.log('File written with success!')
  })
})
