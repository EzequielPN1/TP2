

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