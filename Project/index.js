const express = require('express');
const app = express();
const path = require('path');
//parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//for view engine render seting ejs
app.set('view engine','ejs');
//for usage of staic files
app.use(express.static(path.join(__dirname,'public')));

//end to put some output
//render to show ejs or something pages
app.get("/",(req,res)=>{
    res.render("index");
});
//for making dynamic route we have add colun before dynamic part
app.get("/profile/:username",(req,res)=>{
    res.send(`Kya Dekh Raha Hei ${req.params.username}`);
})

app.listen(3000,()=>{
    console.log("running hei bhai");
});
