const { MongoClient } = require('mongodb');
const dbOper = require('./operations');

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url).then((db) => {
  console.log('correctly connected to db');

  dbOper.insertDocument(db, {
    name: 'GrandaPizzolina',
    description: 'Very big pizza',
  }, 'dishes')
    .then((result) => {
      console.log('Insert Document:\n', result.ops);

      return dbOper.findDocuments(db, 'dishes');
    })
    .then((docs) => {
      console.log('Found documents:\n', docs);
      return dbOper.updateDocument(
        db, { name: 'GrandaPizzolina' }
        , { description: 'updated test' },
        'dishes',
      );
    })
    .then((res) => {
      console.log('Updated Document:\n', res.result);
      return dbOper.findDocuments(db, 'dishes');
    })
    .then((documents) => {
      console.log('Found documents:\n', documents);
      return db.dropCollection('dishes');
    })
    .then((outcome) => {
      console.log('dropped collection', outcome);
      return db.close();
    })
    .catch(err => console.log(err));
}, err => console.log(err))
  .catch(err => console.log(err));
