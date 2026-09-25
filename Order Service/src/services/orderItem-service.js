const OrderItemRepository = require('../repository/orderItem-repository');

class OrderItemService {
    constructor() {
        this.orderItemRepository = new OrderItemRepository();
    }

    async create(data) {
        try {
            const orderItem = await this.orderItemRepository.create(data);
            return orderItem;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await this.orderItemRepository.destroy(id);
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async update(data, id) {
        try {
            const orderItem = await this.orderItemRepository.update(data, id);
            return orderItem;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async get(id) {
        try {
            const orderItem = await this.orderItemRepository.get(id);
            return orderItem;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async getAll() {
        try {
            const orderItems = await this.orderItemRepository.getAll();
            return orderItems;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }
}

module.exports = OrderItemService;