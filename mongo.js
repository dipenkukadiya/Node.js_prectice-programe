const MongoClient =require('mongodb').MongoClient;
const url ='mongodb://127.0.0.1:27017';
const database ='college';
const client = new MongoClient(url);
const { name } = require('ejs');
const express = require('express');
const app= express();

const insert =async ()=>{
let result =await client.connect();
let db =  result.db(database);
//  let collection =db.collection('student');
const resultt=await db.collection('student').insertMany([{name:'dipen',age:'12',mail:'asd'}],function(err,res){console.log("inserted");});
console.log(resultt);
}
insert();
async function getData(){
let result =await client.connect();
let db =  result.db(database);
let collection =db.collection('student');
let response = await collection.find({}).toArray();
console.log(response);
}
getData();
   
const update =async()=>{
let result =await client.connect();
let db =  result.db(database);
let updated = await db.collection('student').updateOne({age:'10'},{$set:{name:'helloooo'}})
}
update()
const deletee = async ()=>{
let result =await client.connect();
let db =  result.db(database);
let a = await db.collection('student').deleteMany({name:'dipen'})
}
deletee();

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';

// // Connect using MongoClient.connect
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log('Connected to MongoDB');
//   async function getData(){
//     let result =await client.connect();
//     let db =  result.db(database);
//     let collection =db.collection('student');
//     let response = await collection.find({}).toArray();
//     console.log(response);}
//     getData();
//   client.close();
// });

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://127.0.0.1:27017'; // replace with your MongoDB connection string
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function fetchRecord() {
//   try {
//     await client.connect();

//     const db = client.db('college');
//     const collection = db.collection('student');
    
    
//     // Specify the query criteria (e.g., find a document where the 'key' is equal to 'value')
   
//     let response = await collection.find({}).toArray();

//     // Fetch the record


//     // Do something with the fetched record
//     console.log('Fetched record:', response);
//   } finally {
//     // Close the connection when you're done
//     await client.close();
//   }
// }

// Call the function to fetch the record
// fetchRecord();

