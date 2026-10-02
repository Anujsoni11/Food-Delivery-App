const axios = require('axios');
const { RESTAURANT_SERVICE_URL } = require('../config/serverConfig');

const OrderRepository = require('../repository/order-repository');
const OrderItemRepository = require('../repository/orderItem-repository');

class OrderService {
    constructor() {
        this.orderRepository = new OrderRepository();
        this.orderItemRepository = new OrderItemRepository();
    }

    async create(data) {
        try {
            const resId = data.restaurantId;
            await axios.get(
                `http://${RESTAURANT_SERVICE_URL}/api/v1/restaurant/${resId}`
            );

            const { items, ...orderData } = data;
            const validatedItems = await Promise.all(
                items.map(async (item) => {
                    const itemId = item.itemId;
                    const itemExist = await axios.get(
                        `http://${RESTAURANT_SERVICE_URL}/api/v1/restaurant/${resId}/item/${itemId}`
                    );

                    const restaurantItem = itemExist.data.data;
                    if (item.quantity > restaurantItem.availableQuantity) {
                        throw new Error("Item quantity exceeded");
                    }

                    return {
                        itemId: itemId,
                        quantity: item.quantity,
                        price: restaurantItem.price
                    };
                })
            );

            const totalAmount = validatedItems.reduce((total, item) => total + item.quantity * item.price, 0);

            orderData.totalAmount = totalAmount;
            const order = await this.orderRepository.create(orderData);
            const orderItems = validatedItems.map((item) => ({
                ...item,
                orderId: order.id
            }));

            const createdItems = await this.orderItemRepository.bulkCreate(orderItems);
            return {
                order,
                items: createdItems
            };
        } catch (error) {
            console.error('Service layer error');
            throw error;
        }
    }

    async destroy(id, userId) {
        try {
            const order = await this.orderRepository.get(id);
            if(order.userId !== userId) {
                throw new Error("Unauthorized cannot delete this order");
            }
            return await this.orderRepository.destroy(id);        
        } catch (error) {
            console.error('Service layer error');
            throw error;
        }
    }

    async cancel(id, userId) {
        try {
            const order = await this.orderRepository.get(id);
            if(order.userId !== userId) {
                throw new Error("Unauthorized cannot cancel this order");
            }
            return await this.orderRepository.update({ status: "Cancelled" }, id);
        } catch (error) {
            console.error('Service layer error');
            throw error;
        }
    }

    async update(data, id, userId) {
        try {
            const order = await this.orderRepository.get(id);
            if(order.userId !== userId) {
                throw new Error("Unauthorized cannot update this order");
            }
            const updatedOrder = await this.orderRepository.update(data, id);
            return updatedOrder;
        } catch (error) {
            console.error('Service layer error');
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
            if (allowedTransitions[order.status].includes(newStatus)) {
                const updatedOrder = await this.orderRepository.update({ status: newStatus }, id);
                return updatedOrder;
            } else {
                console.log("Can't update the order");
                throw error;
            }
        } catch (error) {
            console.error('Service layer error');
            throw error;
        }
    }

    async get(id, userId) {
        try {
            const order = await this.orderRepository.get(id, {
                include: [
                    {
                        model: OrderItem,
                        as: 'items'
                    }
                ]
            });
            if(order.userId !== userId) {
                throw new Error("Unauthorized cannot fetch this order");
            }
            return order;
        } catch (error) {
            console.error('Service layer error');
            throw error;
        }
    }

    async getAll(page, limit) {
        try {
            const pageNumber = Number(page);
            const limitNumber = Number(limit);
            const offset = (pageNumber - 1) * limitNumber;
            const orders = await this.orderRepository.getAll(limitNumber, offset);
            return orders;
        } catch (error) {
            console.error('Service layer error');
            throw error;
        }
    }
}

module.exports = OrderService;