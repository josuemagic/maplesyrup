const { Router } = require('express');
const { productsGet, productsPost, productsPut, productsDelete, productsPatch } = require('../../controllers/products/productsControllers');

const router = Router();

router.get('/', productsGet);

router.post('/', productsPost);

router.put('/:id', productsPut);

router.patch('/', productsDelete);

router.delete('/', productsPatch);

module.exports = router;