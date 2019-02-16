var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017', function(err, client) {
  const db = client.db('learnyoumongo');
  db.collection('parrots').find({
    age : {
      $gt: Number(process.argv[2])
  }}).project({
    name: 1
  , age: 1
  , _id: 0
  }).toArray((err, data) => {
    console.log(data);
    client.close();
  });
});