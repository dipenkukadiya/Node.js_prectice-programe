const express = require('express')
const app = express();
const fil=(req,res,next)=>{
    next();
    
}
app.use(fil);
app.get('/',(req,res)=>{
    res.send("homr pagr")
})
app.get('/user',(req,res)=>{
    res.send("user page")
})
app.listen(3000);

//middle ware to secure route ,app
// pela middleware ma jay ne aagal jay mean next() thay
//tya sudhi reload thya rakhse 