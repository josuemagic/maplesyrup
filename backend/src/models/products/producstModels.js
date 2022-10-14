const { conexion } = require("../../database/config");

function getProducts() {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM products`, function (error, result, field) {
      if (error) return reject(error);
      return resolve(result);
    });
  });
}

function newProductModel(data) {
  const { name, count, price, typeProduct, pathImage, dateCreated } = data;

  return new Promise((resolve, reject) => {
    conexion.query(
      `INSERT INTO products (name, count, price, typeProduct, path_image, date_created) 
      VALUES ('${name}','${count}','${price}','${typeProduct}','${pathImage}', '${dateCreated}')`,
      function (error, result, field) {
        if (error) return reject(error);
        return resolve(result);
      }
    );
  });
}

module.exports = {
  getProducts,
  newProductModel,
};
