const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repository/user-repository');
const { SALT, SECRET_KEY } = require('../config/serverConfig');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    // async create(data) {
    //     try {
    //         const user = await this.signup(email, password, username);
    //         return user;
    //     } catch (error) {
    //         console.log(error);
    //         console.log('Service layer error');
    //         throw error;
    //     }
    // }

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

    async signUp(data) {
        try {
            const hashedPassword = await bcrypt.hash(data.password, SALT);
            data.password = hashedPassword;
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            console.log('Service layer error');
            throw error;
        }
    }

    async login(username, password) {
        try {
            const user = await this.userRepository.getByUsername(username);
            const passwordMatch = await this.checkpassword(password, user.password);
            if (!passwordMatch) {
                console.log('Given credentials are invalid')
            };
            const token = this.createToken({ userId: user.id });
            return token;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async isAuthenticated(token) {
        try {
            const response = await this.verifyToken(token);
            if (!response) {
                throw { error: 'Invalid token' }
            }
            const user = await this.userRepository.getById(response.userId);
            if (!user) {
                throw { error: 'No user with corresponding token exists' };
            }
            return user.id;
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            return this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log('Something went wrong in token creation');
            throw error;
        }
    }

    async createToken(user) {
        try {
            const token = await jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
            return token;
        } catch (error) {
            console.log('Something went wrong in token creation');
            throw error;
        }
    }

    async verifyToken(token) {
        try {
            const response = jwt.verify(token, SECRET_KEY);
            return response;
        } catch (error) {
            console.log('Something went wrong in token verification');
            throw error;
        }
    }

    async checkpassword(password, encryptedPassword) {
        try {
            return bcrypt.compareSync(password, encryptedPassword);
        } catch (error) {
            console.log('Service layer error');
            throw error;
        }
    }
}

module.exports = UserService;