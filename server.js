var express = require("express");
var open = require("open");
var path = require("path");
var chalk = require("chalk");

var port = 8080;

var app = express();

app.get('/',function(req,res){
    res.send("Hello");
});

app.listen(port,function(err){
    if(err){
        console.log("error occured");
    } else {
        console.log(chalk.blue('Starting dev server on port :'+port));
        open("http://localhost:"+port);
    }
})