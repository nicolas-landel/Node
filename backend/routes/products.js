const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

router.post('/', productController.addProduct);
// router.put('/:id', auth, multer, stuffCtrl.modifyThings);
// router.delete('/:id', auth, stuffCtrl.deleteThing);
// router.get('/:id', auth, stuffCtrl.getOneThing);
router.get('/', productController.getAllProducts);

module.exports = router;