var http = require(`http`)
var a
    var b
    var c = a+b
    var msg
    if(c==30){
        msg = "sum is 30"
    }else{
        msg = "sum is not 30"
    }
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
        res.write("A value is"+a)
        res.write("<br/>B value is"+b)
        res.write(`<br/><b. sum is ${a+b}</b>`)
        res.end("<br/>"+msg+"done")
}).listen(4031)
console.log("http://127.0.0.1:4031")