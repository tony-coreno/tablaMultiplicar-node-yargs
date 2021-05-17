const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    desc: "Es la base de la tabla"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    desc: "Lista la tabla en consola"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    desc: "Limite de iteraciones en la tabla"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser numero";
    }
    return true;
  }).argv;

  module.exports = argv;