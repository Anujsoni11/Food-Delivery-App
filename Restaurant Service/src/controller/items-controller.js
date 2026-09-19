const ItemService = require('../service/items-service');
const {StatusCodes} = require('http-status-codes');

const itemService = new ItemService();

const createItem = async (req, res) => {
    try {
        const item = await itemService.createItem(req.body);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: item,
            err: {},
            message: 'Item created successfully',
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Error creating item',
        });
    }
};

const destroyItem = async (req, res) => {
    try {
        await itemService.deleteItem(req.params.id);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: {},
            err: {},
            message: 'Item deleted successfully',
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Error deleting item',
        });
    }
};

const updateItem = async (req, res) => {
    try {
        const item = await itemService.updateItem(req.params.id, req.body);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: item,
            err: {},
            message: 'Item updated successfully'
        });
    } catch(error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Error updating item',
        });
    }
};

const getItem = async (req, res) => {
    try {
        const item = await itemService.getItem(req.params.id);
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: item,
            err: {},
            message: 'Item fetched successfully'
        });
    } catch(error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Error fetching item',
        });
    }
};

const getAllItem = async (req, res) => {
    try {
        const {page, limit} = req.query;
        const item = await itemService.getAllItem({page, limit});
        return res.status(StatusCodes.ACCEPTED).json({
            success: true,
            data: item,
            err: {},
            message: 'Items fetched successfully'
        });
    } catch(error) {
        return res.status(error.statusCode).json({
            success: false,
            data: {},
            err: error,
            message: 'Error fetching items',
        });
    }
}

module.exports = {
    createItem,
    destroyItem,
    updateItem,
    getItem,
    getAllItem
}