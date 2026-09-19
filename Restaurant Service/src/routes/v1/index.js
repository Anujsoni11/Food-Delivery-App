const express = require('express');
const { createRestaurant, destroyRestaurant, updateRestaurant, getRestaurant, getAllRestaurant} = require('../../controller/restaurant-controller');
const { createItem, destroyItem, updateItem, getItem, getAllItem} = require('../../controller/items-controller');

const router = express.Router();

router.post('/restaurant', createRestaurant);
router.delete('/restaurant/:id', destroyRestaurant);
router.patch('/restaurant/:id', updateRestaurant);
router.get('/restaurant/:id', getRestaurant);
router.get('/restaurant', getAllRestaurant);

router.post('/restaurant/:restaurantid/item', createItem);
router.delete('/restaurant/:restaurantId/item/:itemId', destroyItem);
router.patch('/restaurant/:restaurantId/item/:itemId', updateItem);
router.get('/restaurant/:restaurantId/item/:itemId', getItem);
router.get('/restaurant/:restaurantId/item', getAllItem);

module.exports = router;