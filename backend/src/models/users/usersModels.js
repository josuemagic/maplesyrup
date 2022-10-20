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


function newUserModels(data) {

    const { name, last_name, second_last_name, email, password, telephone,
        gender, birth_date } = data;

    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO users (names, last_name, second_last_name, email, password, telephone, gender, birth_date) 
        VALUES ('${name}','${last_name}','${second_last_name}','${email}','${password}','${telephone}','${gender}','${birth_date}')`, function (error, result, field) {
            if (error)
                return reject(error);
            return resolve(result);
        })
    })
}

function newDirecctionFromUserId(id_user, data) {

    const country = "Mexico";
    const { state, city, postal_code, suburb, street, first_heighboring_street,
        second_heighboring_street } = data;

    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO directions(id_user, country, state, city, postal_code, suburb, 
                street, first_heighboring_street, second_heighboring_street)
        VALUES (
        '${id_user}','${country}','${state}','${city}','${postal_code}','${suburb}',
        '${street}','${first_heighboring_street}', '${second_heighboring_street}')`, function (error, result, field) {
            if (error)
                return reject(error);
            return resolve(result);
        })
    })
}

module.exports = {
    usuariosGetModels,
    newUserModels,
    newDirecctionFromUserId
}