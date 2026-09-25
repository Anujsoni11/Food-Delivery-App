const OrderRepository = require('../repository/order-repository');

class OrderService {
    constructor() {
        this.orderRepository = new OrderRepository();
    }

    async create(data) {
        try {
            const order = await this.orderRepository.create(data);
            return order;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await this.orderRepository.destroy(id);
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async update(data, id) {
        try {
            const order = await this.orderRepository.update(data, id);
            return order;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async get(id) {
        try {
            const order = await this.orderRepository.get(id);
            return order;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async getAll() {
        try {
            const orders = await this.orderRepository.getAll();
            return orders;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }
}

module.exports = OrderService;