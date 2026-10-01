

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'] || req.headers['authorization'];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token not provided'
            });
        }

        
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