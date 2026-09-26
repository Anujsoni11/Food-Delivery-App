const OrderRepository = require('../repository/order-repository');
const OrderItemRepository = require('../repository/orderItem-repository');

class OrderService {
    constructor() {
        this.orderRepository = new OrderRepository();
        this.orderItemRepository = new OrderItemRepository();
    }

    async create(data) {
        try {
            const { items, ...orderData } = data;
            const order = await this.orderRepository.create(orderData);
            const orderId = order.id;
            const createdItems = [];
            let i = 0;
            for(i=0; i<items.length; i++) {
                items[i].orderId = orderId;
                order.totalAmount += items[i].price;
                createdItems[i] = await this.orderItemRepository.create(items[i]);
            }
            const finalOrder = { order, items: createdItems};
            return finalOrder;
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
            const order = await this.orderRepository.get(id, {
                include: [
                    {
                        model: OrderItem,
                        as: 'items'
                    }
                ]
            });
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