var http=require("http")
var employee= [ {name:"Umang",country:"India",age:"22",businessEntity:"Employee"},
{name:"Kaustubh",country:"China",age:"23",businessEntity:"Employee"},
{name:"Devesh",country:"America",age:"24",businessEntity:"Employee"},
{name:"Dilip",country:"Bahrain",age:"25",businessEntity:"Employee"}];

http.createServer(function(req,resp){
resp.writeHead(200,{"Content-Type":"text/plain"});
resp.end(JSON.stringify(employee));

}).listen(7000);