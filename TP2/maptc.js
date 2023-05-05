

 const fs = require('fs');

const readFile = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
  
  const writeFile = (path, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };
  
  readFile('package.json')
    .then((contenidoStr) => {
      const contenidoObj = JSON.parse(contenidoStr);
      const size = Buffer.byteLength(contenidoStr, 'utf-8');
      const info = {
        contenidoStr,
        contenidoObj,
        size,
      };
      console.log(info);
  
      const infoStr = JSON.stringify(info, null, '\t');
      return writeFile('maptc.txt', infoStr);
    })
    .then(() => {
      console.log('El Objeto info fue grabado correctamente en el archivo correctamente.');
    })
    .catch((err) => {
      console.error('Ha ocurrido un error:', err);
    });