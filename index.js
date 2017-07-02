var express = require("express");
var open = require("open");
var path = require("path");
var chalk = require("chalk");
var cors = require("cors");

var port = 8080;

var app = express();

app.use(cors());

app.use(express.static(path.join(__dirname,'/app/assets/')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"/app/index.html"));
    console.log(process.cwd());
});

app.get('/products',function(req,res){
    res.json(
        [
            {"id": 1,  "name":"cheese", "price":20, "imageUrl" :"../../assets/images/Cheese.png"},
            {"id": 2, "name": "butter", "price":30, "imageUrl" :"../../assets/images/butter.png"},
            {"id": 3, "name": "chicken Whole", "price":15, "imageUrl":"../../assets/images/Chicken.png"}
        ]
    );
});


app.listen(port,function(err){
    if(err){
        console.log("error occured");
    } else {
        console.log(chalk.blue('Starting dev server on port :'+port));
        open("http://localhost:"+port);
    }
});
