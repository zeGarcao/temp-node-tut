const { readFile, writeFile } = require("fs");

// Sem o UTF8 retorna o buffer com os bytes em hex
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log(result);
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(result);
        writeFile(
            "./content/result-async.txt",
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result); // result is undifined
                console.log("done");
            }
        );
    });
});
console.log("starting next task");
