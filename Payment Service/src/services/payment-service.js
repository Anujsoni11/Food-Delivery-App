const axios = require("axios");
const { ORDER_SERVICE_URL } = require("../config/serverConfig");
const PaymentRepository = require("../repository/payment-repository");

class PaymentService {
    constructor() {
        this.paymentRepository = new PaymentRepository();
    }

    async create(data, userId, token) {
        try {
            const existingPayment = await this.paymentRepository.findByOrderId(data.orderId);
            if (existingPayment) {
                throw new Error("Payment already exists for this order");
            }

            const orderResponse = await axios.get(`${ORDER_SERVICE_URL}/api/v1/orders/${data.orderId}`, {
                headers: {
                    "x-access-token": token
                }
            });
            if (!orderResponse.data.success) {
                throw new Error("Order not found");
            }

            const order = orderResponse.data.data;
            if (order.userId !== userId) {
                throw new Error("You are not authorized to pay for this order");
            }

            if (order.status !== "Pending") {
                throw new Error("Payment can only be created for a pending order");
            }

            data.userId = userId;
            data.transactionId = `TXN_${Date.now()}`;
            data.amount = order.totalAmount;
            const payment = await this.paymentRepository.create(data);

            const updatedPayment = await this.paymentRepository.update(
                payment.id,
                { status: "Completed" }
            );

            return updatedPayment;
        } catch (error) {
            console.log("Service layer error");
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await this.paymentRepository.destroy(id);
        } catch (error) {
            console.log("Service layer error");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const payment = await this.paymentRepository.update(id, data);
            return payment;
        } catch (error) {
            console.log("Service layer error");
            throw error;
        }
    }

    async updateStatus(id, status) {
        try {
            const allowedTransitions = {
                "pending": ["successful", "failed", "refunded"],
                "successful": ["refunded"],
                "failed": [],
                "refunded": []
            };
            const payment = await this.paymentRepository.get(id);
            if (allowedTransitions[payment.status].includes(status)) {
                const updatedPayment = await this.paymentRepository.update(id, { status });
                return updatedPayment;
            } else {
                console.log("Can't update payment status");
                throw error;
            }
        } catch (error) {
            console.log("Service layer error");
            throw error;
        }
    }

    async get(id) {
        try {
            const payment = await this.paymentRepository.get(id);
            return payment;
        } catch (error) {
            console.log("Service layer error");
            throw error;
        }
    }

    async getAll(page, limit) {
        try {
            const pageNumber = Number(page);
            const limitNumber = Number(limit);
            const offset = (pageNumber - 1) * limitNumber;
            const payments = await this.paymentRepository.getAll(limitNumber, offset);
            return payments;
        } catch (error) {
            console.log("Service layer error");
            throw error;
        }
    }
}

module.exports = PaymentService;