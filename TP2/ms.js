const fs = require('fs');

try {

  const contenidoStr = fs.readFileSync('package.json', 'utf-8');
  const contenidoObj = JSON.parse(contenidoStr);


  let info = {
    contenidoStr,
    contenidoObj,
    size: fs.statSync('package.json').size
  };

 
  console.log(info);

  
  fs.writeFileSync('ms.txt', JSON.stringify(info, null, '\t'));

  console.log('El Objeto info fue grabado correctamente en el archivo correctamente');
} catch (err) {
  console.error('Error ', err);
}