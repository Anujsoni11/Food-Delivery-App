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
            const orderItems = items.map((item) => {
                return {
                    ...item,
                    orderId: orderId
                };
            });

            const createdItems = await this.orderItemRepository.bulkCreate(orderItems);
            const finalOrder = {
                order,
                items: createdItems
            };
            return finalOrder;

        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const order = await this.orderRepository.destroy(id);
            order.status = 'Cancelled';
            return order;
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

    async updateStatus(newStatus, id) {
        try {
            const allowedTransitions = {
                Pending: ["Confirmed", "Cancelled"],
                Confirmed: ["Preparing", "Cancelled"],
                Preparing: ["OutForDelivery"],
                OutForDelivery: ["Delivered"],
                Delivered: [],
                Cancelled: []
            };
            const order = await this.orderRepository.get(id);
            if(allowedTransitions[order.status].includes(newStatus)) {
                const updatedOrder = await this.orderRepository.update({ status: newStatus }, id);
                return updatedOrder;
            } else {
                console.log("Can't update the order");
                throw error;
            }
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