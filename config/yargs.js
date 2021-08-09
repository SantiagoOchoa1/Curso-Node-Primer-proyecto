const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "la base de la tabla de multplicacion",
  })
  .option("l", {
    alias: "listar",
    demandOption: false,
    type: "boolean",
    default: false,
    describe: "muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    demandOption: false,
    type: "number",
    describe: "limite de la tabla de multiplicacion",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("la base debe ser un número");
    }
    return true;
  }).argv;

module.exports = argv;
