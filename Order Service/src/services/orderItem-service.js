const OrderItemRepository = require('../repository/orderItem-repository');
const OrderRepository = require('../repository/order-repository');

class OrderItemService {
    constructor() {
        this.orderItemRepository = new OrderItemRepository();
        this.orderRepository = new OrderRepository();
    }

    async create(data, id) {
        try {
            const order = await this.orderRepository.get(id);
            if (order.status === 'Pending') {
                const finalData = data.map((item) => {
                    return {
                        ...item,
                        orderId: id
                    };
                });
                const createdItems = await this.orderItemRepository.bulkCreate(finalData);
                return createdItems;
            }
            else {
                throw new Error("Can't add items in a cancelled or delivered order");
            }
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

    async getAll(page, limit, orderId) {
        try {
            const pageNumber = Number(page);
            const limitNumber = Number(limit);
            const offset = (pageNumber - 1) * limitNumber;
            const orderItems = await this.orderItemRepository.getAll(limitNumber, offset, orderId);
            return orderItems;
        } catch (error) {
            console.log(error);
            console.log('Service layer error');
            throw error;
        }
    }
}

module.exports = OrderItemService;