const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at alokv.it.21@nitj.ac.in");
});

app.get("/about", function(req , res){
    res.send("I am Alok Verma.");
});

app.get("/hobbies", function(req, res){
    res.send("I love to code <br> I love to watch movies.")
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
});