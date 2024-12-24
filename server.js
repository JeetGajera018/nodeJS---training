var http = require('http') //htttp is core module
http.createServer((req,res)=>{
    res.end("<h1> hello node JS ")
}).listen(4031)
console.log("http:127.0.0.1:4031")