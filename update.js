var document = {
    "name": "Tina",
    "age": 30,
    "username": "tinatime"
}
console.log(JSON.stringify(document))

var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017', function(err, client) {
  const db = client.db(process.argv[2]);
  db.collection('users').updateOne({username:'tinatime'}, {$set: {age: 40}})
  client.close()
});