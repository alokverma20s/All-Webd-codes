const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const moongoose = require("mongoose");
const { default: mongoose } = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
mongoose.set('strictQuery', false);
moongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser:true});

const articleSchema ={
    title: String,
    content:  String
}

const Article = mongoose.model("Article", articleSchema);

///////////////////////////////////////////Request Targetting All Articles /////////////////////////////////////////////////

app.route("/articles")

.get(function(req, res){
    Article.find({},function(err, foundArticles){
        if(!err){
            res.send(foundArticles);
        }
        else{
            res.send(err);
        }
    })
})

.post(function(req, res){
    const title = req.body.title;
    const content = req.body.content;

    const newArticle = new Article({
        title :title,
        content:content
    });
    newArticle.save(function(err){
        if(!err){
            res.send('Successfully added a new articles');
        }
        else{
            res.send(err);
        }
    });
})

.delete(function(req, res){
    Article.deleteMany(function(err){
        if(err){
            res.send(err);
        }else{
            res.send("Successfully Deleted all articles!");
        }
    });
});


// app.get("/articles", );

// app.post("/articles", );

// app.delete("/articles", );

///////////////////////////////////////////Request Targetting A Specific Articles /////////////////////////////////////////////////

app.route("/articles/:articleTitle")

.get(function(req, res){
    
    Article.findOne({title:req.params.articleTitle}, function(err, foundArticle){
        if(!err){
            if(foundArticle){
                res.send(foundArticle);
            }
            else{
                res.send("No matching articles are found");
            }
        }
    })
})

.put(function(req, res){
    Article.updateOne(
        {title:req.params.articleTitle},
        {title:req.body.title, content:req.body.content},
        function(err){
            if(!err){
                res.send("Successfully updated articles.");
            }
            else{
                res.send(err);
            }
        }
    )
})
.delete(function(req, res){
    Article.deleteOne(
        {title:req.params.articleTitle},
        function(err){
        if(!err){
            res.send("Article deleted successfully.");
        }else{
            res.send(err);
        }
    })
})
.patch(function(req, res){
    Article.updateOne(
        {title:req.params.articleTitle},
        {$set:req.body},
        function(err){
            if(!err){
                res.send("Successfully updated the articles");
            }else{
                res.send(err);
            }
        }
    )
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});