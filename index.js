const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, (err, db) => {

    assert.equal(err, null);

    console.log('correctly connected to the server');

    const collection = db.collection('dishes');
    //inserting one document into collection

    collection.insertOne({"name": "pizza", "description": "very good pizza"},
        ((err, result) => {
          assert.equal(err, null);

          console.log("After Insert:\n");
          //number of operations performed successfully
          console.log(result.ops);

          collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);

            console.log("Found the result");
            console.log(docs);

            db.dropCollection("dishes", (err, result) => {
              assert.equal(err, null);
              db.close();
            });
          });
        }));

});
