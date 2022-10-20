const { Router } = require('express');
const {
    productsGet,
    productsNewGet,
    topSellProductsGet,
    inOfferProductsGet,
    productsPost,
    productsPut,
    productsDelete,
    productsPatch } = require('../../controllers/products/productsControllers');

const router = Router();

router.get('/', productsGet);

router.get('/NewProducts', productsNewGet);

router.get('/TopSaleProducts', topSellProductsGet);

router.get('/InOfferProducts', inOfferProductsGet);

router.post('/', productsPost);

router.put('/:id', productsPut);

router.patch('/', productsDelete);

router.delete('/', productsPatch);

module.exports = router;