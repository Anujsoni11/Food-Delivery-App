const express = require('express');
const { OrderController, OrderItemController } = require('../../controller/index');
const { OrderMiddleware }  = require('../../middleware/index');

const router = express.Router();

router.post('/orders', OrderMiddleware.isAuthenticated, OrderController.create);
router.delete('/orders/:id',OrderMiddleware.isAuthenticated, OrderController.destroy);
router.patch('/orders/:id/cancel', OrderMiddleware.isAuthenticated, OrderController.cancel);
router.patch('/orders/:id', OrderMiddleware.isAuthenticated, OrderController.update);
router.get('/orders/:id', OrderMiddleware.isAuthenticated, OrderController.get);
router.get('/orders',OrderMiddleware.isAuthenticated, OrderMiddleware.isAdmin, OrderController.getAll);

router.post('/orders/:id/status',OrderMiddleware.isAuthenticated, OrderMiddleware.isAdmin, OrderController.updateStatus);

router.post('/orders/:id/items', OrderItemController.createItem);
router.delete('/orders/:id/items/:itemId', OrderItemController.destroyItem);
router.patch('/orders/:id/items/:itemId', OrderItemController.updateItem);
router.get('/orders/:id/items/:itemId', OrderItemController.getItem);
router.get('/orders/:id/items', OrderItemController.getAllItem);

module.exports = router;