const express = require('express');
const { OrderController, OrderItemController } = require('../../controller/index');

const router = express.Router();

router.post('/orders', OrderController.create);
router.delete('/orders/:id', OrderController.destroy);
router.patch('/orders/:id', OrderController.update);
router.get('/orders/:id', OrderController.get);
router.get('/orders', OrderController.getAll);

router.post('/orders/:id/items', OrderItemController.createItem);
router.delete('/orders/:id/items/:itemId', OrderItemController.destroyItem);
router.patch('/orders/:id/items/:itemId', OrderItemController.updateItem);
router.get('/orders/:id/items/:itemId', OrderItemController.getItem);
router.get('/orders/:id/items', OrderItemController.getAllItem);

module.exports = router;