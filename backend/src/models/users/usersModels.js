const { conexion } = require('../../database/config');

function petitionSQL(sql) {
    return new Promise((resolve, reject) => {
        conexion.query(sql, function (error, result, field) {
            if (error)
                return reject(error);
            return resolve(result);
        })
    })
}

module.exports = {
    petitionSQL,
}