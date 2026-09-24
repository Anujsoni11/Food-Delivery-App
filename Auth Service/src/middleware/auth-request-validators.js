const validateUserAuth = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'Username or password missing in the request'
        })
    }
    next();
}

const validateSignup = (req, res, next) => {
    const requiredFields = [
        'username',
        'email',
        'password',
        'phoneNumber',
        'location'
    ];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({
                success: false,
                data: {},
                message: 'Something went wrong',
                err: 'Provided information is incorrect'
            });
        }
    }

    next();
};

const validateIsAdminRequest = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'User id not given'
        })
    }
    next();
}
module.exports = {
    validateUserAuth,
    validateSignup,
    validateIsAdminRequest
}