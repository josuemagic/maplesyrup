const { usuariosGetModels } = require("../../models/users/usersModels");

const usuariosGetService = async () => {
  try {
    let response = await usuariosGetModels();
    return response;
  } catch (error) {
    return error;
  }
};

const ususariosPostServices = async (req, res) => {
  const body = req.body;

  res.json({
    msg: "post API - controlador",
  });
};

const ususariosPutServices = (req, res) => {
  res.json({
    msg: "put API - controlador",
  });
};

const ususariosPatchServices = (req, res) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const ususariosDeleteServices = (req, res) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGetService,
  ususariosPostServices,
  ususariosPutServices,
  ususariosPatchServices,
  ususariosDeleteServices,
};
