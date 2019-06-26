var http=require("http")
var employee= [ {name:"Umang",country:"India",age:"22"},
{name:"Kaustubh",country:"China",age:"23"},
{name:"Devesh",country:"America",age:"24"},
{name:"Dilip",country:"Bahrain",age:"25"}];

http.createServer(function(req,resp){
resp.writeHead(200,{"Content-Type":"text/plain"});
resp.end(JSON.stringify(employee));

}).listen(7000);