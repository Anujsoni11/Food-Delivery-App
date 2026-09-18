const RestaurantService = require('../service/restaurant-service');
const {StatusCodes} = require('http-status-codes');

const restaurantService = new RestaurantService();

const createRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantService.createRestaurant(req.body);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: restaurant,
            err: {},
            message: 'Restaurant created successfully',
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error',
        });
    }
};

const destroyRestaurant = async (req, res) => {
    try {
        await restaurantService.destroyRestaurant(req.params.id);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: {},
            err: {},
            message: 'Restaurant deleted successfully',
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error',
        });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: restaurant,
            err: {},
            message: 'Restaurant updated successfully'
        });
    } catch(error) {
        console.log(error);
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error',
        });
    }
};

const getRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantService.getRestaurantById(req.params.id);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: restaurant,
            err: {},
            message: 'Restaurant fetched successfully'
        });
    } catch(error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error',
        });
    }
};

const getAllRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantService.getAllRestaurants(req.params.id);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: restaurant,
            err: {},
            message: 'Restaurants fetched successfully'
        });
    } catch(error) {
        console.log(error);
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error',
        });
    }
}

module.exports = {
    createRestaurant,
    destroyRestaurant,
    updateRestaurant,
    getRestaurant,
    getAllRestaurant
}