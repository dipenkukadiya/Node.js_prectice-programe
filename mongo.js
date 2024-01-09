const MongoClient =require('mongodb').MongoClient;
const url ='mongodb://127.0.0.1:27017';
const database ='college';
const client = new MongoClient(url);
const express = require('express');
const app= express();

async function getData(){
let result =await client.connect();
let db =  result.db(database);
let collection =db.collection('student');
let response = await collection.find({age:'14'}).toArray();
console.log(response);
}
getData();
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

