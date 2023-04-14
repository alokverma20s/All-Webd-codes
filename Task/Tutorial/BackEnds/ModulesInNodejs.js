const fs = require("fs");

let text = fs.readFileSync("dele.txt", "utf-8");
console.log(text);
text = text.replace("digital", "Analog");

console.log("This content of the file is ");

console.log("Creating a new file...");
fs.writeFileSync("Alok.txt", text);
