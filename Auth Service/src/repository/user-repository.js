const { User } = require('../models');

class UserRepository {
    async create(data) {
        try {
            const user = await User.create({
                email: data.email,
                password: data.password,
                username: data.username,
                phoneNumber: data.phoneNumber,
                location: data.location,
                role: data.role
            });
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

    async getByUsername(username) {
        try {
            const user = await User.findOne({ where: { username } });
            return user;
        } catch (error) {
            console.log('Something went wrong');
            throw error;
        }
    }
}

module.exports = UserRepository;