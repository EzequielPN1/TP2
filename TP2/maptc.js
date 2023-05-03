/*
Este script utiliza la sintaxis then/catch para manejar las promesas de las operaciones de lectura y escritura de archivos. 
Primero se lee el contenido del archivo package.json y se crea el objeto info. Luego, se convierte este objeto a un string utilizando JSON.stringify, 
y se escribe en un archivo llamado info.txt. En caso de que ocurra un error en alguna de las operaciones,
 se maneja el error y se muestra un mensaje adecuado.*/

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