const RestaurantRepository = require('../repository/restaurant-repository');

class RestaurantService {
    constructor() {
        this.restaurantRepository = new RestaurantRepository();
    }

    async createRestaurant(data) {
        try {
            const restaurant = await this.restaurantRepository.createRestaurant(data);
            return restaurant;
        } catch (error) {
            throw new Error('Service layer error');
        }
    }

    async destroyRestaurant(id) {
        try {
            await this.restaurantRepository.destroyRestaurant(id);
        } catch (error) {
            throw new Error('Service layer error');
        }
    }

    async updateRestaurant(id, data) {
        try {
            const restaurant = await this.restaurantRepository.updateRestaurant(id, data);
            return restaurant;
        } catch (error) {
            throw new Error('Service layer error');
        }
    }

    async getRestaurantById(id) {
        try {
            const restaurant = await this.restaurantRepository.getRestaurantById(id);
            return restaurant;
        } catch (error) {
            throw new Error('Service layer error');
        }
    }

    async getAllRestaurants(page, limit) {
        try {
            const pageNumber = Number(page);
            const limitNumber = Number(limit);
            const offset = (pageNumber - 1) * limitNumber;
            const restaurants = await this.restaurantRepository.getAllRestaurants(limitNumber, offset);
            return restaurants;
        } catch (error) {
            throw new Error('Service layer error');
        }
    }
}

module.exports = RestaurantService;