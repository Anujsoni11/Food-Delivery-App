const { Order } = require('../models');

class OrderRepository {
    async create(data) {
        try {
            const order = await Order.create(data);
            return order;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await Order.destroy(id);
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async update(data, id) {
        try {
            const order = await Order.update(data, {
                where: {
                    id: id
                }
            });
            return order;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async get(id) {
        try {
            const order = await Order.findByPk(id);
            return order;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async getAll() {
        try {
            const orders = await Order.findAll();
            return orders;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
}

module.exports = OrderRepository;