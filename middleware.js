
//middleware
// work before routes is called middleware
// means to perform code before routes.
// user of middleware
// 1. authentication
// 2. authorization
// 3. validation
// 4. logging
// 5. caching
// 6. compression
// 7. rate limiting
// 8. cors
// 9. body parser
// 10. session
// 11. cookie



const express = require('express')
const app = express()
//middleware
//app.use is work thier are 3 parameters req, res and next in single function
//we use next function to pass to make routes.
// in function we have to write code after that call next() when code complate to pass on.

//first method
app.use((req,res,next)=>{
    //console.log("middleware chala");
    console.log("Middleware Called");
    next();
});

//secong method
//error handling
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('something broke');
    
});


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/profile',(req,res,next)=>{
    return next(new Error('Something Went Wrong'));
});

app.listen(3000);

//frontend backend frontend
//make routes for page transfer



