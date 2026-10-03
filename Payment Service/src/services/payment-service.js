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

    async get(id) {
        try {
            const payment = await this.paymentRepository.get(id);   
            return payment;
        } catch (error) {
            console.log("Service layer error");
            throw error;
        }
    }

    async getAll() {
        try {
            const payments = await this.paymentRepository.getAll();
            return payments;
        } catch (error) {
            console.log("Service layer error");
            throw error;
        }
    }
}

module.exports = PaymentService;