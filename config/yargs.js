const argv = require('yargs')
    .option('b',
        {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Toma la base de multiplicar'
        })
    .option('l',
        {
            alias: 'list',
            default: false,
            type: 'boolean',
            describe: 'Lista la tabla de multiplicar por consola'
        })
        .option('h',
        {
            alias: 'hasta',
            default: 10,
            type: 'number',
            describe: 'Límite para multiplicar'
        })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw (`El argumento no es un número`);
        }
        return true;
    })
    .argv;
module.exports = argv;