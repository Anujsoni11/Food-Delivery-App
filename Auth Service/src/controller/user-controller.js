const UserService = require('../service/user-service');

const userService = new UserService();

// const create = async (req, res) => {
//     try {
//         const response = await userService.create(req.body);
//         return res.status(200).json({
//             success: true,
//             data: response,
//             err: {},
//             message: 'Successfully created a user'
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success: false,
//             data: {},
//             err: error,
//             message: 'Controller layer error'
//         });
//     }
// };

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

const signUp = async (req, res) => {
    try {
        const response = await userService.signUp(req.body);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully signed up'
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

const login = async (req, res) => {
    try {
        const response = await userService.login(req.body.username, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully logged In'
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

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully isAuthenticated'
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
}

const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'Successfully fetched whether user is admin or not'
        })
    } catch (error) {
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Something went wrong'
        });
    }
}

module.exports = {
    // create,
    destroy,
    update,
    signUp,
    login,
    isAuthenticated,
    isAdmin
}