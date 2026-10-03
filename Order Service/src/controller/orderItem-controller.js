const OrderItemService = require('../services/orderItem-service');
const { StatusCodes } = require('http-status-codes');

const orderItemService = new OrderItemService();

const createItem = async (req, res) => {
    try {
        const response = await orderItemService.create(req.body, req.params.id);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully created a Item'
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

const destroyItem = async (req, res) => {
    try {
        const response = await orderItemService.destroy(req.params.itemId);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully deleted a Item'
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

const updateItem = async (req, res) => {
    try {
        const response = await orderItemService.update(req.body, req.params.itemId);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully updated a Item'
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

const getItem = async (req, res) => {
    try {
        const response = await orderItemService.get(req.params.itemId);
        if(response) {
            return res.status(StatusCodes.ACCEPTED).json({
                success: true,
                data: response,
                err: {},
                message: 'Successfully fetched a Item'
            });
        } else {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                data: {},
                err: {},
                message: 'Item not found'
            });
        }
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const getAllItem = async (req, res) => {
    try {
        const response = await orderItemService.getAll(req.query.page, req.query.limit, req.params.id);
        if(response) {
            return res.status(StatusCodes.ACCEPTED).json({
                success: true,
                data: response,
                err: {},
                message: 'Successfully fetched all Item'
            });
        } else {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                data: {},
                err: {},
                message: 'Item not found'
            });
        }
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
    createItem,
    destroyItem,
    updateItem,
    getItem,
    getAllItem
}