const {
  usuariosGetModels,
  newUserModels,
  newDirecctionFromUserId } = require("../../models/users/usersModels");

const usuariosGetService = async () => {
  try {
    let response = await usuariosGetModels();
    return response;
  } catch (error) {
    return error;
  }
};

const newUserPostServices = async (data) => {

  // Call the models for add user and the response that
  // return the sql we'll set the newDirecionFromServices

  try {
    let response = await newUserModels(data);
    let second_response = await newDirectionFromServices(response.insertId, data);

    return second_response;

  } catch (error) {
    return error;
  }
};

const newDirectionFromServices = async (id_user, data_direction) => {
  try {

    let response = await newDirecctionFromUserId(id_user, data_direction);
    return response;

  } catch (error) {
    return error
  }
}

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
  newUserPostServices,
  ususariosPutServices,
  ususariosPatchServices,
  ususariosDeleteServices,
};
