const axios = require('axios');

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'] || req.headers['authorization'];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token not provided'
            });
        }

        const response = await axios.get(`http://localhost:3001/api/v1/isAuthenticated`, {
            headers: {
                'x-access-token': token
            }
        });

        req.userId = response.data.data;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: 'Not authenticated'
        });
    }
};

const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'] || req.headers['authorization'];

        const response = await axios.post(
            'http://localhost:3001/api/v1/isAdmin', 
            {
                id: req.userId
            }, {
            headers: {
                'x-access-token': token
            }
        });

        console.log(response.data);
        if (!response.data.data) {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Admin privileges required.'
            });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            success: false,
            message: 'Access denied. Admin privileges required.'
        });
    }
};

module.exports = {
    isAuthenticated,
    isAdmin
}