const fs = require('fs');


let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero.`);
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }
        fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla ${base} exitosamente`);
        });
    });
}


//limite = 10 default value is 10 if not given
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero.`);
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }
        resolve(data);
    });
}



module.exports = {
    crearTabla,
    listarTabla
}