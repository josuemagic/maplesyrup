const { conexion } = require('../../database/config');

function usuariosGetModels() {
    return new Promise((resolve, reject) => {
        conexion.query("SELECT * FROM users", function (error, result, field) {
            if (error)
                return reject(error);
            return resolve(result);
        })
    })
}

module.exports = {
    usuariosGetModels,
}