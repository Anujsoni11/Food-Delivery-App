const { OrderItem } = require('../models');

class OrderItemRepository {
    async create(data) {
        try {
            const orderItem = await OrderItem.create(data);
            return orderItem;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const orderItem = await OrderItem.bulkCreate(data, {
                validate: true
            });
            return orderItem;
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
            const orderItem = await OrderItem.update(data, {
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
            const orderItem = await OrderItem.findByPk(id);
            return orderItem;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async getAll(ltNumber, offset, orderId) {
        try {
            const orderItems = await OrderItem.findAndCountAll({
                where: {
                    id: orderId
                },
                limit: ltNumber,
                offset: offset
            });
            return orderItems;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
}

module.exports = OrderItemRepository;