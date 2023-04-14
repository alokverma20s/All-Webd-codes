// const average = require("./mod");
// console.log(average([3,4]));

const mod = require("./mod");
console.log(mod.avg([3, 4]));
console.log("This is index.js");

console.log("The multiplication of 3 and 5 is " + mod.multi(3, 5));
console.log("The division of 3 and 5 is " + mod.div(3, 5));
console.log("The substraction of 3 and 5 is " + mod.sub(3, 5));
console.log("The Addition of 3 and 5 is " + mod.sum([3, 5]));

