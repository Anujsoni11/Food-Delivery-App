const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        name = 'Service Error',
        message = 'Something went wrong',
        explaination = 'Error happened in server',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super();
        this.name = name,
        this.message = message,
        this.explaination = explaination,
        this.statusCode = statusCode
    }
}

module.exports = ServiceError;