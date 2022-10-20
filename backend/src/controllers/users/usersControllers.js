const { response, request } = require("express");
const { petitionSQL } = require("../../models/users/usersModels");

const {
  usuariosGetService,
  newUserPostServices,
  //   ususariosPut,
  //   ususariosPatch,
  //   ususariosDelete,
} = require("../../services/users/usersServices");

const usuariosGet = async (req = request, res = response) => {
  // Aca llaman SOLAMENTE llamamos a services y el sercices llama al modelo
  // y retorna la respuesta de la base de datos

  try {
    let response = await usuariosGetService();
    return res.status(200).json({
      response,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

const newUserPostController = async (req, res) => {

  try {
    let response = await newUserPostServices(req.body);

    return res.status(200).json({
      msg: "user created"
    })

  } catch (error) {
    return res.status(500).json({
      msg: "error creating user"
    })
  }
};

const ususariosPut = (req, res) => {
  res.json({
    msg: "put API - controlador",
  });
};

const ususariosPatch = (req, res) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const ususariosDelete = (req, res) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  newUserPostController,
  ususariosPut,
  ususariosPatch,
  ususariosDelete,
};
