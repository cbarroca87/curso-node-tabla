const argv = require('./config/yargs')
const { crearTabla } = require('./helpers/multiplicar');

console.clear();

crearTabla(argv.b, argv.l, argv.h).then(nombreArchivo => console.log(`El archivo ${nombreArchivo} se ha creado correctamente`)).catch(err => { console.log(err) });