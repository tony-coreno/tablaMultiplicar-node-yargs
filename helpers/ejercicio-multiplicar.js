const fs = require("fs"); // Se requiere librería File System NODE

const tabla = async (resolve, reject) => {
    
    const tablaMultiplicar =  (a = 5) => {
        let salida = "";
        console.log("============");
        console.log(`  Tabla ${a} `);
        console.log("============");
        for (let b = 0; b <= 10; b++) {
          // console.log(`${a} * ${b} = ${a*b}`)
          salida += `${a} * ${b} = ${a * b}\n`;
        }
        console.log(salida);
      
        //------------> Utilizando write File <-----------------
        // fs.writeFile(`tabla-${a}.txt`,salida, (err) => {
        //     if(err) throw err;
        //     console.log(`Tabla- ${a} creada`)
        // })
      
        //Utilizando write File Sync  --> No se pasa callback, se tendría que manejar el error con un try catch
      
        await fs.writeFileSync(`tabla-${a}.txt`, salida);
        console.log(`Tabla- ${a} creada`);
      };

}

  
  module.exports = { tablaMultiplicar };
  