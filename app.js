const { tablaMultiplicar } = require("./helpers/multiplicar");

const argv = require('./config/yargs');

console.clear();
console.log(argv);
console.log("base: yargs", argv.b, argv.l, argv.h);

//   let a = 199;
// console.log(process.argv)
//process.argv
//Cortando manualmente y extrayendo la base
// const [ , , arg3 = 'a=5'] = process.argv;
// const [, a = 5] = arg3.split('=')

// console.log(arg3)

tablaMultiplicar(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

//Tarea 2.-
//option ('l')
//boolean
//listar
//default: false
