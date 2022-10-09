const { conexion } = require('../../database/config');

function newProduct() {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT * FROM users', function (error, result, field) {
            if (error)
                return reject(error);
            return resolve(result);
        })
    })
}

module.exports = {
    newProduct,
}