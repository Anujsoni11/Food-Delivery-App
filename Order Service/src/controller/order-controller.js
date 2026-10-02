const OrderService = require('../services/order-service');
const { StatusCodes } = require('http-status-codes');

const orderService = new OrderService();

const create = async (req, res) => {
    try {
        const response = await orderService.create(req.body);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully created a order'
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await orderService.destroy(req.params.id, req.userId);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully deleted a order'
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const cancel = async (req, res) => {
    try {
        const response = await orderService.cancel(req.params.id, req.userId);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully cancelled a order'
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await orderService.update(req.body, req.params.id, req.userId);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully updated a order'
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const updateStatus = async (req, res) => {
    try {
        const response = await orderService.updateStatus(req.body.status, req.params.id);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully updated a order'
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await orderService.get(req.params.id, req.userId);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully fetched a order'
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await orderService.getAll(req.query.page, req.query.limit);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully fetched all orders'
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

module.exports = {
    create,
    destroy,
    cancel,
    update,
    updateStatus,
    get,
    getAll
}