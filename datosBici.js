const fs = require("fs");
const bicicletasJSON = fs.readFileSync("./bicicletas.json", "utf-8");
const bicicletasArray = JSON.parse(bicicletasJSON);

module.exports = bicicletasArray