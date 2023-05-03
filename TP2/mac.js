const fs = require('fs');



fs.readFile('package.json', 'utf-8', (err, contenidoStr) => {
  if (err) {
    console.error('Error ',err);
    return;
  }

  const contenidoObj = JSON.parse(contenidoStr);

  fs.stat('package.json', (err, stats) => {
    if (err) {
        console.error('Error ',err);
      return;
    }

  const info = {
    contenidoStr,
    contenidoObj,
    size: stats.size,
  };

  
    console.log(info);

   
    fs.writeFile('mac.txt', JSON.stringify(info, null, '\t'), (err) => {
      if (err) {
        console.error('Error ',err);
        return;
      }

      console.log('El Objeto info fue grabado correctamente en el archivo correctamente');
    });
  });
});