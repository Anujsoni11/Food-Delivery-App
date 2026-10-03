const PaymentRepository = require("../repository/payment-repository");

class PaymentService {
    constructor() {
        this.paymentRepository = new PaymentRepository();
    }

    async create(data) {
        try {
            const payment = await this.paymentRepository.create(data);
            return payment;
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
            const payment = await this.paymentRepository.update(id, { status: status });
            return payment;
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