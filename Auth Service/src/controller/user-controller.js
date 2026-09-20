const UserService = require('../service/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully created a user'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Controller layer error'
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await userService.destroy(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully deleted a user'
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

const update = async (req, res) => {
    try {
        const response = await userService.update(req.body, req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully updated a user'
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
    create,
    destroy,
    update
}