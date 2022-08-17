const { Router } = require('express');
const { usuariosGet, ususariosPost, ususariosPut, ususariosDelete, ususariosPatch } = require('../../controllers/users');

const router = Router();

router.get('/', usuariosGet);

router.post('/', ususariosPost);

router.put('/:id', ususariosPut);

router.patch('/', ususariosPatch);

router.delete('/', ususariosDelete);



module.exports = router;