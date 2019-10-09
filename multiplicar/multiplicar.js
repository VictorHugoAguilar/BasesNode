// required
const fs = require('fs');

// importamos para colorear la consola
const colors = require('colors');

// creamos una funcion que devolvera es una promesa

let crearArchivo = (base, limite = 10) => {

    let data = '';

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un número');
            return;
        }

        if (!Number(limite)) {
            reject('El límite no es un número');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        };

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {

                reject(err);

            } else {

                resolve(`tabla-${base}.txt`);
            }

        });

    });
};

// creamos una funcion para listar por base y limite

let listarTabla = (base, limite = 10) => {

    console.log('========================='.green);
    console.log(`=====  Tabla de ${base}  ======`.green);
    console.log('========================='.green);
    console.log('');

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}\n`);

    };

};


module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla,
};