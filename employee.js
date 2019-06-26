var express= require("express")
var app=express();
var employee= [ {name:"Umang",country:"India",age:"22"},
{name:"Kaustubh",country:"China",age:"23"},
{name:"Devesh",country:"America",age:"24"},
{name:"Dilip",country:"Bahrain",age:"25"},
{name:"Shreya",country:"Bahrain",age:"25"}];

var employeeDetails=function(req,res)
{
	res.send(employee)
}
app.get('/emp',employeeDetails);
app.listen(8000);