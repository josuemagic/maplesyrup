const { response, request } = require('express');
const { newProduct } = require('../../models/products/producstModels');

const usuariosGet = async (req = request, res = response) => {

    try {
        let response = await newProduct();
        return response;
    } catch (error) {
        return error;
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