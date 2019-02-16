

var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017', function(err, client) {
  const db = client.db('learnyoumongo');
  var size = process.argv[2]
  db.collection('prices')
    .aggregate([
      { $match: {
        size: size
      }}
    , { $group: {
        _id: 'average'
      , average: {
          $avg: '$price'
        }
      }}
    ]).toArray(function(err, data) {
      console.log(Number(data[0].average).toFixed(2))
      db.close()
    })
  })