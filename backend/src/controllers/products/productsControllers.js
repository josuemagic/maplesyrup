const { response, request } = require('express');
const { petitionSQL } = require('../../models/users/usersModels');

const productsGet = async (req = request, res = response) => {

    // Aca llaman SOLAMENTE a services y el sercices llama al modelo 
    // y retorna la respuesta de la base de datos

    // Aqui solamente se obtiene la req, se hace la 
    // validacion si esta o no, (pensando en "moment") 
    // para la validacion de datos

    res.json({
        msg: 'get API - controlador',
    })
}

const productsPost = async (req, res) => {

    const body = req.body;

    res.json({
        msg: 'post API - controlador'
    })
}

const productsPut = (req, res) => {

    res.json({
        msg: 'put API - controlador',
    })
}

const productsPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

const productsDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}



module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsPatch,
    productsDelete
}