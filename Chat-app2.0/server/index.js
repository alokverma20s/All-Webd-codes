const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology:true }).then(()=>{
    console.log("DB connection successful");
}).catch((err)=>{
    console.log(err.message);
});

const server = app.listen(process.env.PORT, () => {
  console.log("Server start on port  " + process.env.PORT);
});
