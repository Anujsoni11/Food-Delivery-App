const {Restaurants} = require('../models');

class RestaurantRepository {
    async createRestaurant(data) {
        try {
            const restaurant = await Restaurants.create(data);
            return restaurant;
        } catch (error) {
            console.log(error)
            throw new Error('Error creating restaurant');
        }
    }

    async destroyRestaurant(id) {
        try {
            await Restaurants.destroy({ where: { id } });
        } catch (error) {
            throw new Error('Error deleting restaurant');
        }
    }

    async updateRestaurant(id, data) {
        try {
            const restaurant = await Restaurants.update(data, { where: { id } });
            return restaurant;
        } catch (error) {
            throw new Error('Error updating restaurant');
        }
    }

    async getRestaurantById(id) {
        try {
            const restaurant = await Restaurants.findByPk(id);
            return restaurant;
        } catch (error) {
            throw new Error('Error fetching restaurant');
        }
    }

    async getAllRestaurants() {
        try {
            const restaurants = await Restaurants.findAll();
            return restaurants;
        } catch (error) {
            throw new Error('Error fetching restaurants');
        }
    }
}

module.exports = RestaurantRepository;