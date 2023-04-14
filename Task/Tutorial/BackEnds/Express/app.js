const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));// For Serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');// Set the templete engine as pug
app.set('views', path.join(__dirname, 'views'));// Set the views directory

// ENDPOINTS
app.get('/',(req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely "
    const params = {'title':'Pubg is the best game',"content":con}
    res.status(200).render('index.pug',params)
})
// START THE SERVER

















// // Our pug demo endpoint
// app.get("/demo",(req, res)=>{
//     res.status(200).render('demo', { title: 'Hey Alok', message: 'Hello there! and thanks for telling me how to use pug' })
// });

// app.get("/",(req, res)=>{
//     res.status(200).send("This is Homepage of my first express app with webd");
// });


// app.get("/about",(req, res)=>{
//     res.status(200).send("This is About page of my first express app with webd");
// });

// app.post("/about",(req, res)=>{
//     res.send("This is post request page of my first express app with webd");
// });

// app.get("/this",(req, res)=>{
//     res.status(404).send("This page is not found");
// });


app.listen(port, ()=>{
    console.log(`This application started successfully on the port ${port}`);
});