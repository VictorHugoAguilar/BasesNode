const argv = require('./config/yargs').argv;

// importamos para colorear la consola
const colors = require('colors');

// const { multiplicar } = require('./multiplicar/multiplicar'); usando destructuracion queda de la siguiente manera

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => console.log('Archivo creado: ' + resp))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido'.red);
        break;
}

// pasaremos por argumento la base de nuestra multiplicación

// let argv = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv);

// console.log(base)