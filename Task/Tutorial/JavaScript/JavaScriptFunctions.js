
let srt = "Hello World";
console.log("This is functions Tutorial");

function greet(name, greetText = "Greetings from JavaScript.") {
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
    console.log("hello World"); //This line will never Executed(Unreachable Code)
}


let name = "Harry";
let name1 = "Alok";
let name2 = "Arav";
let name3 = "Ajit";
let name4 = "Arvind";
let greetText1 = "Good Morning";
greet(name, greetText1);
greet(name1);
greet(name2, greetText1);
greet(name3, greetText1);
greet(name4, greetText1);

let returnVal = sum(1,2,3);
console.log(returnVal);