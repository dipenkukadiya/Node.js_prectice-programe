const express =require('express');
const app = express();
app.get('',(req,res)=>{
    res.send("<h1 style = color:green >hello this one is home page</h1>")

})
app.get('/about',(req,res)=>{
    res.send(  `<a href="/me">click here for about mw</a>
    `)

})
app.get('/login',(req,res)=>{
    res.send(`
    
    <form>  
    <div class="container">   
        <label>Username : </label>   
        <input type="text" placeholder="Enter Username" name="username"
        value='${req.query.Username}' required>  
        <br>
        <label>Password : </label>   
        <input type="password" placeholder="Enter Password" name="password" 
        value='${req.query.password}'required>  
        <br>
        <button type="submit">Login</button>   
       
    </div>   
</form>     
    `)

})
app.get('/me',(req,res)=>{
    res.send([{
        username : 'dipen',
        password :'admin'},
        {
            username : 'you',
            password :'client'  

        }]);

})

app.listen(2000);