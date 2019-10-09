const opts = {
    base: {
        alias: 'b',
        demand: true,
    },
    limite: {
        alias: 'l',
        default: 10,
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear un archivo que multiplica por la base que pasemos por argumento', opts)
    .help()
    .argv;

module.exports = {
    argv
};