
//----------->Asynchronos scenario<---------
// console.log("start")

const { name } = require("ejs");

// setTimeout(()=>{
// console.log("procee")},3000);

// console.log("excute")

// for asynchronous drawback we use promises
 let a= 20;
 let b =20;
//  let name ="gjg";
 console.log("pela plus "+ (a+b))

 let promisone = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("ye rha prmose");
        resolve({b:38,name:"dipen"})
     },2000);
 }).then((data)=>{
    if(data.b==30){
    console.log("pchhi aa call thyu"+ data.name);
 console.log("pachhi plus "+ (a+data.b))}
 else{
    reject({err:"hey try"})
 }
}).catch((errorr)=>{
    console.log(errorr.err);
 }).finally(()=>{
    console.log("finaa");
 })

 