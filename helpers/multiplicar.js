const fs = require("fs"); // Se requiere librería File System NODE
const colors = require('colors');

const tablaMultiplicar = async (a = 5, listar = false, hasta=10) => {
  try {
    let salida = "";

    for (let b = 0; b <= `${hasta}`; b++) {
      // console.log(`${a} * ${b} = ${a*b}`)
      salida += `${a} * ${b} = ${a * b}\n`;
    }
    if (listar) {
      console.log("============".green);
      console.log(`  Tabla ${a} `.red);
      console.log("============".rainbow);
      console.log(salida.cyan);
    }

    //------------> Utilizando write File <-----------------
    // fs.writeFile(`tabla-${a}.txt`,salida, (err) => {
    //     if(err) throw err;
    //     console.log(`Tabla- ${a} creada`)
    // })

    //Utilizando write File Sync  --> No se pasa callback, se tendría que manejar el error con un try catch

    fs.writeFileSync(`./salida/tabla-${a}.txt`, salida);
    return `Tabla- ${a}`;
  } catch (err) {
    throw err;
  }
};

module.exports = { tablaMultiplicar };
