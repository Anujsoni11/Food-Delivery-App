const { OrderItem } = require('../models');

class OrderItemRepository {
    async create(data) {
        try {
            const order = await OrderItem.create(data);
            return order;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await OrderItem.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async update(data, id) {
        try {
            const order = await OrderItem.update(data, {
                where: {
                    id: id
                }
            });
            const updatedOrder = await OrderItem.findByPk(id);
            return updatedOrder;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async get(id) {
        try {
            const order = await OrderItem.findByPk(id);
            return order;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async getAll() {
        try {
            const orders = await OrderItem.findAll();
            return orders;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
}

module.exports = OrderItemRepository;