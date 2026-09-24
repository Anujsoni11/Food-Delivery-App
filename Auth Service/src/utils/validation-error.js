const { StatusCodes } = require('http-status-codes');

class ValidationError extends Error {
    constructor(
            name = 'Validation Error',
            message = 'Something went wrong',
            explaination = 'Error happened during validation',
            statusCode = StatusCodes.BAD_REQUEST
        ) {
            super();
            this.name = name,
            this.message = message,
            this.explaination = explaination,
            this.statusCode = statusCode
        }
}

module.exports = ValidationError;