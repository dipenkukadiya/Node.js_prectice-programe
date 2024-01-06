
//----------->Asynchronos scenario<---------
// console.log("start")

// setTimeout(()=>{
// console.log("procee")},3000)

// console.log("excute")

// for asynchronous drawback we use promises
 let a= 20;
 let b =20;
 console.log("pela plus "+ (a+b))

 let promisone = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(b=30)
     },2000);
 })

 promisone.then((b)=>{
 console.log("pachhi plus "+ (a+b))})

 