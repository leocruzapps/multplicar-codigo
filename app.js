const argv = require('./config/yargs.js').argv;
const colors = require('colors/safe');
const { crearTabla, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(colors.green(`La tabla del ${argv.base} es:\n${archivo}`)))
            .catch(error => console.log("Ocurrio un Error:".red, error));
        break;

    case 'crear':

        crearTabla(argv.base, argv.limite)
            .then(archivo => console.log('Arhcivo creado para', colors.green(archivo)))
            .catch(error => console.log("Ocurrio un Error:", error));

        break;

    default:
        console.log('Comando no reconocido.');
        break;

}