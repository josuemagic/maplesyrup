const { response, request } = require("express");
const {
  getProducts,
  newProductsGetModels,
  newProductModel,
  topSellProductsGetModels,
  inOfferProductsGetModels
} = require("../../models/products/producstModels");

// Cloudinary configuration
const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const productsGetServices = async () => {
  try {
    let response = await getProducts();
    return response;
  } catch (error) {
    return error;
  }
};

const newProductsGetServices = async () => {
  try {
    let response = await newProductsGetModels();
    return response;
  } catch (error) {
    return error;
  }
};

const topSellProductsGetServices = async () => {
  try {
    let response = await topSellProductsGetModels();
    return response;
  } catch (error) {
    return error;
  }
};

const infOfferProductsGetServices = async () => {
  try {
    let response = await inOfferProductsGetModels();
    return response;
  } catch (error) {
    return error;
  }
};

const productsPostServices = async (data) => {
  const { fileImage } = data.files;
  data.body.count = parseInt(data.body.count);
  data.body.price = parseFloat(data.body.price);

  // Subimos el archivo a cloudinary
  try {
    // const { secure_url } = await cloudinary.uploader.upload(
    //   fileImage.tempFilePath,
    //   {height: 1250, width: 1870, crop: "scale"}
    // );
    const { secure_url } = await cloudinary.uploader.upload(
      fileImage.tempFilePath
    );
    data.body.pathImage = secure_url;
    // Go to newProductModel
    const response = newProductModel(data.body);
    return response;
  } catch (error) {
    return error;
  }
};



// const productsPutServices = (req, res) => {
//   res.json({
//     msg: "put API - controlador",
//   });
// };

// const productsPatchServices = (req, res) => {
//   res.json({
//     msg: "patch API - controlador",
//   });
// };

// const productsDeleteServices = (req, res) => {
//   res.json({
//     msg: "delete API - controlador",
//   });
// };

module.exports = {
  productsGetServices,
  newProductsGetServices,
  topSellProductsGetServices,
  infOfferProductsGetServices,
  productsPostServices,
};
