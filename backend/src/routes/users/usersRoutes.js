const { Router } = require('express');
const { usuariosGet, newUserPostController, ususariosPut, ususariosDelete, ususariosPatch } = require('../../controllers/users/usersControllers');
const {validateCreate} = require('../../validator/users/newUserValidate')


const router = Router();

router.get('/', usuariosGet);

router.post('/new', validateCreate, newUserPostController);

router.put('/:id', ususariosPut);

router.patch('/', ususariosPatch);

router.delete('/', ususariosDelete);

module.exports = router;