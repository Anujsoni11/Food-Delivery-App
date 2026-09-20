const { User } = require('../models');

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async destroy(id) {
        try {
            return await User.destroy(id);
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }

    async update(data, id) {
        try {
            const user = await User.update(data, { id: id });
            return user;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
}

module.exports = UserRepository;