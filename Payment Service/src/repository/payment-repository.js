const { Payment } = require("../models");

class PaymentRepository {
    async create(data) {
        try {
            const payment = await Payment.create(data);
            return payment;
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await Payment.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const payment = await Payment.update(data, {
                where: {
                    id: id
                }
            });
            const updatedPayment = await Payment.findByPk(id);
            return updatedPayment;
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async get(id) {
        try {
            const payment = await Payment.findByPk(id);
            return payment;
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }

    async getAll() {
        try {
            const payments = await Payment.findAll();
            return payments;
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }
}

module.exports = PaymentRepository;