class AppError extends Error {
    constructor(name, explaination, message, statusCode) {
        super();
        this.name = name;
        this.explaination = explaination;
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;