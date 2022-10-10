const { response, request } = require("express");
const {
  productsPostServices,
} = require("../../services/products/productsServices");

const productsGet = async (req = request, res = response) => {
  // Aca llaman SOLAMENTE a services y el sercices llama al modelo
  // y retorna la respuesta de la base de datos

  // Aqui solamente se obtiene la req, se hace la
  // validacion si esta o no, (pensando en "moment")
  // para la validacion de datos

  res.json({
    msg: "get API - controlador",
  });
};

const productsPost = async (req = request, res) => {
  const { body } = req;

  try {
    let response = await productsPostServices(req);
    return res.status(200).json({
      msg: "File Uploaded",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }

  res.json({
    msg: "post API - controlador",
    body,
  });
};

const productsPut = (req, res) => {
  res.json({
    msg: "put API - controlador",
  });
};

const productsPatch = (req, res) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const productsDelete = (req, res) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  productsGet,
  productsPost,
  productsPut,
  productsPatch,
  productsDelete,
};
