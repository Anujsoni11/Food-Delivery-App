const PaymentService = require("../services/payment-service");

const paymentService = new PaymentService();

const create = async (req, res) => {
    try {
        const response = await paymentService.create(req.body);
        res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: "Successfully created a payment"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Controller layer error"
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await paymentService.destroy(req.params.id);
        res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: "Successfully deleted a payment"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Controller layer error"
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await paymentService.update(req.params.id, req.body);
        res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: "Successfully updated a payment"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Controller layer error"
        });
    }
};

const updateStatus = async (req, res) => {
    try {
        const response = await paymentService.update(req.params.id, req.body.status );
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: "Successfully updated payment status"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Controller layer error"
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await paymentService.get(req.params.id);
        if(response) {
            res.status(200).json({
                success: true,
                data: response,
                err: {},
                message: "Successfully fetched a payment"
            });
        } else {
            res.status(404).json({
                success: false,
                data: {},
                err: {},
                message: "Payment not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: "Controller layer error"
        });
    }
};

const getAll = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const response = await paymentService.getAll( page, limit );
        if(response) {
            res.status(200).json({
                success: true,
                data: response,
                err: {},
                message: "Successfully fetched all payments"
            });
        } else {
            res.status(404).json({
                success: false,
                data: {},
                err: {},
                message: "Payments not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},   
            err: error,
            message: "Controller layer error"
        });
    }   
};

module.exports = {
    create,
    destroy,
    update,
    updateStatus,
    get,
    getAll
};