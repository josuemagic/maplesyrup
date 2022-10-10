const { response, request } = require("express");
const { newProductModel } = require("../../models/products/producstModels");

const productsGetServices = async (data) => {
  // try {
  //     let response = await newProduct();
  //     return response;
  // } catch (error) {
  //     return error;
  // }
};

const productsPostServices = async (data) => {
  // Creamos el path con el cual se va a guardar la imagen
  // Subimos el archivo a cloudinary
  // Vamos al newProductModel
  // Guardamos el path en la base de datos

  console.log(data.body);
  console.log(data.files);
};

const productsPutServices = (req, res) => {
  res.json({
    msg: "put API - controlador",
  });
};

const productsPatchServices = (req, res) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const productsDeleteServices = (req, res) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  productsGetServices,
  productsPostServices,
  productsPutServices,
  productsPatchServices,
  productsDeleteServices,
};
