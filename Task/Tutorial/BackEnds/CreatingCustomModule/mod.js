console.log("This is module");
function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

function sum(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}
function substract(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
module.exports = {
    avg: average,
    sum: sum,
    sub: substract,
    multi: multi,
    div: division
}