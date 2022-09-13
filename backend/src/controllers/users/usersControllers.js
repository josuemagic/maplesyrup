const { response, request } = require('express');
const { petitionSQL } = require('../../models/users/usersModels');

const usuariosGet = async (req = request, res = response) => {

    // Aca llaman SOLAMENTE a services y el sercices llama al modelo 
    // y retorna la respuesta de la base de datos

    try {
        let response = await petitionSQL('SELECT * FROM users');
        return res.status(200).json({
            response
        })
    } catch (error) {
        return res.status(500).json({
            error: "No se pudo hacer la peticion a la base de datos"
        })
    }
}

const ususariosPost = async (req, res) => {

    const body = req.body;

    res.json({
        msg: 'post API - controlador'
    })
}

const ususariosPut = (req, res) => {

    res.json({
        msg: 'put API - controlador',
    })
}

const ususariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

const ususariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}



module.exports = {
    usuariosGet,
    ususariosPost,
    ususariosPut,
    ususariosPatch,
    ususariosDelete
}