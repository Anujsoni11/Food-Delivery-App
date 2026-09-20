const UserRepository = require('../repository/user-repository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            console.log('Service layer error');
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await this.userRepository.destroy(id);
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async update(data, id) {
        try {
            const user = await this.userRepository.update(data, id);
            return user;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }
}

module.exports = UserService;