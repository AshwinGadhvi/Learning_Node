const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get("/profile",(req,res)=>{
    res.send("Profile Page");
})

app.listen(3000);

//routes create karna
// creating like www.google.com/ after this (remember /)
//domain/this_part
//example
//ashwin.com/project
//project is route
//For Creating Route we Use get

//request handeler Is one type of Middleware
//for updation we have to restart the server 
//but we install package nodemon
//nodemon package restart the server 
//suppose without install we change the code that not shown on site when we refresh.
//for that we have to restart the server
//so for little changes we have restart server many times.
//so using nodemon it will automatically restart server when code may be change in script.



