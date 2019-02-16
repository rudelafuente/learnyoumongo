var document = {
  firstName: process.argv[2],
  lastName : process.argv[3]
}
console.log(JSON.stringify(document))

var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017', function(err, client) {
  const db = client.db('learnyoumongo');
  db.collection('docs').insert(document)
  client.close()
});