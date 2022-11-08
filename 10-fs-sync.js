const { readFileSync, writeFileSync } = require("fs");

// READ
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

// WRITE
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result : ${first}, ${second}`,
    { flag: "a" }
);
console.log("done");
console.log("starting the next one");
