const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hellow World");
})

server.listen(3000);