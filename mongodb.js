const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const database = 'college';
const client = new MongoClient(url);

async function connection(){
     let a = await client.connect();
     db = a.db(database);
     return db.collection('student');
}
module.exports =connection;
