var express = require("express");
var path = require("path");
var bp = require("body-parser");

var app = express() 
var PORT = 3000 

var tables = [

];

var waitingList = [

];

app.get("/", function(request, response){
response.sendFile(path.join(__dirname, "index.html"))
});

app.get("/view", function(request, response){
response.sendFile(path.join(__dirname, "indexView.html"))
});

app.listen(PORT, function(){
console.log("Yay it worked!")
});


