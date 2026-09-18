const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error {
    constructor(
        explaination = 'Validation Layer Error',
        message = 'Something went wrong',
        statusCode = StatusCodes.BAD_REQUEST
        ) {
        super();
        this.name = 'Validation Error',
        this.explaination = explaination,
        this.message = message,
        this.statusCode = statusCode
    }
}

module.exports = ValidationError;