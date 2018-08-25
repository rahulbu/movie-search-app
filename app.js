var express=require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/results",function(req,res){
    var query = req.query.search;
    request("http://www.omdbapi.com/?apikey=thewdb&s="+query,function(error, response,body){
        
        if(!error && response.statusCode==200){
            var parse = JSON.parse(body);
            res.render("results",{parse : parse});
        }
    });
});

app.get("/search",function(req,res){
    res.render("search");
});

app.get("*",function(req,res){
    res.redirect("/search");
});









app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is established ...");
});