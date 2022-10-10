const { conexion } = require('../../database/config');

function newProductModel() {
    // Agregamos el path a la base de datos y los datos
    // del producto
    return new Promise((resolve, reject) => {
        conexion.query('SELECT * FROM users', function (error, result, field) {
            if (error)
                return reject(error);
            return resolve(result);
        })
    })
}

module.exports = {
    newProductModel,
}