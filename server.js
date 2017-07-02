var express = require("express");
var open = require("open");
var path = require("path");
var chalk = require("chalk");

var port = 8080;

var app = express();

app.use(express.static(path.join(__dirname,'/app/assets/')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"/app/index.html"));
    console.log(__dirname);
});

app.listen(port,function(err){
    if(err){
        console.log("error occured");
    } else {
        console.log(chalk.blue('Starting dev server on port :'+port));
        open("http://localhost:"+port);
    }
})