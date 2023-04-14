const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    // name:{
    //     type:String,
    //     required: true
    // },
    rating: {
        type :Number,
        min: 1,
        max:10
    },
    review: String
});

const  Fruit = mongoose.model("Fruit", fruitSchema);


const fruit = new Fruit({
    name: "Apple",
    rating: 4,
    review: "Pretty solid as a fruit"
});
// fruit.save();
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person',peopleSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 5,
    review: "Greate fruits"
});
const person = new Person({
    name: "Amy",
    age: 20,
    favouriteFruit:pineapple
});
// person.save();
// pineapple.save();


Person.updateOne({name:"John"}, {favouriteFruit:fruit}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Sucessfully updated John's Profile");
    }
})
// const kiwi = new Fruit({
//     name:"Kiwi",
//     rating: 10,
//     review: "The best fruits"
// });
// const orange = new Fruit({
//     name:"Orange",
//     rating: 5,
//     review: "Too sour for me"
// });
// const banana = new Fruit({
//     name:"Banana",
//     rating: 8,
//     review: "Weired Texture"
// });
// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

const peach= new Fruit({
    rating: 10,
    review: "Very healthy"
});
// peach.save();
console.log("Connected Successfully!");

let cnt =0;
Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        // console.log(fruits);
        mongoose.connection.close();
        fruits.forEach(element => {
            console.log(element.name);
            cnt++;
        });
    }
    // console.log("Total number of fruits are "+cnt);
    // console.log("All the element printed successfully.");
});

// Fruit.updateOne({_id:"63bc1e584a9c2ad575e05318"}, {name:"Peach"}, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully Updated");
//     }
// });

// Fruit.deleteOne({name:"Peach"},  function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Data Successfully deleted");
//     }
// });



// Person.updateOne({name:"John"}, {favouriteFruit:})