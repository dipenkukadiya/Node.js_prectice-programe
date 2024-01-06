// const fs = require('fs');
// const input =process.argv;
// if (input[2]=='add'){
// fs.writeFileSync(input[3],input[4]);
// }else if(input[2]== 'remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("invalid output")
// }

//--------- for file crud ----------

// const { error } = require('console');
// const fs = require('fs');
// const path = require('path');
// const d = path.join(__dirname,'hi');
// const filepath =`${d}/app.txt`;

//---------------- for write ------------------
// fs.writeFileSync(filepath,"now thi work");

//----------------- for read-----------------

// fs.readFile(filepath,'utf8',(error,item)=>{
//     console.log(item)
// })
//------------ for append text in file -------------

// fs.appendFile(filepath,' aa aavi jvu joiae',(error)=>{
//     if(!error) console.log("file update");

// });

//-------------- for rename -------------

// fs.rename(filepath,`${d}/website.txt`,(error)=>{
//     if(!error)console.log("file rename") 
// });

//------------ for delete---------

// fs.unlinkSync(`${d}/website.txt`);
// console.log("delete");