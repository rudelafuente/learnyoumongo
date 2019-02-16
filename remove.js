
var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017', function(err, client) {
  const db = client.db(process.argv[2]);
  db.collection(process.argv[3]).deleteOne({_id: process.argv[4]}, function(error,data){
  })
  client.close()
});