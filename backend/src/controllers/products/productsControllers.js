const { response, request } = require("express");
const {
  productsGetServices,
  productsPostServices,
} = require("../../services/products/productsServices");

const productsGet = async (req = request, res = response) => {
 

  try {
    let response = await productsGetServices();
    return res.status(200).json({
      data: response
    });
  } catch (error) {
    res.status(500).json({
      msg: "It couldn't get products ",
      error,
    });
  }
};

const productsPost = async (req = request, res) => {
  const { name, count, price, typeProduct } = req.body;

  if (!name || !count || !price || !typeProduct || !req.files) {
    return res.status(400).json({
      msg: "Necesary Elements: Name, Count, Price, typeProduct and fileImage",
    });
  }

  try {
    let response = await productsPostServices(req);
    return res.status(200).json({
      msg: "Product Uploaded",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
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
