const express = require('express');
const connection =require('./mongodb');
const app = express();
app.use(express.json);

app.get('/',async(req,res)=>{
        let data = await connection();
        data = await data.find().toArray();
        res.send(data) });
app.post('/',(req,res)=>{
    res.send(req.body)
    
        
})

app.listen(5000)
