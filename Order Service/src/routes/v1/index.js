const express = require('express');
const { OrderController } = require('../../controller/index');

const router = express.Router();

router.post('/orders', OrderController.create);
router.delete('/orders/:id', OrderController.destroy);
router.patch('/orders/:id', OrderController.update);
router.get('/orders/:id', OrderController.get);
router.get('/orders', OrderController.getAll);

module.exports = router;