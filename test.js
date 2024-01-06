const express = require('express');
const path = require('path');
const app =express();
const publicpath = path.join(__dirname,'public');
// app.use(express.static(publicpath));
app.set('view engine' , 'ejs');

app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`)
});
app.get('/test',(req,res)=>{
    res.sendFile(`${publicpath}/test.html`)
});
app.get('/profile',(req,res)=>{
    const user={
        name :"dipem",
        mail: "d@com"
    }
    res.render('profile',{user});
});
app.get('*',(req,res)=>{
    res.sendFile(`${publicpath}/pnf.html`)
});
app.listen(1010);