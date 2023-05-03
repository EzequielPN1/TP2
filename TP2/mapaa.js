
/*Este script también utiliza la sintaxis async/await para manejar las promesas de las operaciones de lectura y escritura de archivos. 
Primero se lee el contenido del archivo package.json y se crea el objeto info. Luego, se convierte este objeto a un string utilizando JSON.stringify, 
y se escribe en un archivo llamado info.txt. En caso de que ocurra un error en alguna de las operaciones, 
se maneja el error y se muestra un mensaje adecuado.*/



const fs = require('fs').promises;

const main = async () => {
  try {
    const contenidoStr = await fs.readFile('package.json', 'utf-8');
    const contenidoObj = JSON.parse(contenidoStr);
    const size = Buffer.byteLength(contenidoStr, 'utf-8');
    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };
    console.log(info);

    const infoStr = JSON.stringify(info, null, '\t');
    await fs.writeFile('mapaa.txt', infoStr);
    console.log('El Objeto info fue grabado correctamente en el archivo correctamente');
  } catch (err) {
    console.error('Ha ocurrido un error:', err);
  }
};

main();