const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = 'Something went wrong',
        explaination = 'Service Layer error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super();
        this.name = 'Service Error',
        this.message = message,
        this.explaination = explaination,
        this.statusCode = statusCode
    }
}

module.exports = ServiceError;