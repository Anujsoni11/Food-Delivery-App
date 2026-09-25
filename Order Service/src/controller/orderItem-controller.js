const OrderItemService = require('../services/orderItem-service');

const orderItemService = new OrderItemService();

const createItem = async (req, res) => {
    try {
        const order = await orderItemService.create(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully created a orderItem'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const destroyItem = async (req, res) => {
    try {
        const response = await orderItemService.destroy(req.body.id);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully deleted a orderItem'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const updateItem = async (req, res) => {
    try {
        const response = await orderItemService.update(req.body, req.body.id);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully updated a orderItem'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const getItem = async (req, res) => {
    try {
        const response = await orderItemService.get(req.body.id);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully fetched a orderItem'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const getAllItem = async (req, res) => {
    try {
        const response = await orderItemService.getAll();
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully fetched all order Items'
        });
    } catch (error) {
        return res.status(500).json({
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