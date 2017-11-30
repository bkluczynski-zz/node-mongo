// const assert = require('assert');

const insertDocument = (db, document, collection) => {
  const coll = db.collection(collection);
  return coll.insert(document);
};

const findDocuments = (db, collection) => {
  const coll = db.collection(collection);
  return coll.find({}).toArray();
};

const removeDocument = (db, document, collection) => {
  const coll = db.collection(collection);
  return coll.deleteOne(document);
};

const updateDocument = (db, document, update, collection) => {
  const coll = db.collection(collection);
  return coll.updateOne(document, { $set: update }, null);
};

module.exports = {
  insertDocument,
  findDocuments,
  removeDocument,
  updateDocument,
};
