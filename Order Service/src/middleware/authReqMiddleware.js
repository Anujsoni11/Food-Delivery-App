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

module.exports = {
    isAuthenticated
}