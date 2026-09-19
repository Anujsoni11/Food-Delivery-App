'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Role: {
      type: DataTypes.ENUM(
        'User',
        'Admin',
        'Restaurant_Owner'
      ),
      allowNull: false,
      defaultValue: 'User'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};