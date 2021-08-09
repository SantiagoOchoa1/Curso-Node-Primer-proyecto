const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 1, listar, hasta) => {
  try {
    let stream = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      stream += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".red} ${base * i}\n`;
    }

    listar ? console.log(consola) : null;

    fs.writeFileSync(`./salida/tabla-${base}.txt`, stream);
    return `tabla-${base}.txt`;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearArchivo,
};
