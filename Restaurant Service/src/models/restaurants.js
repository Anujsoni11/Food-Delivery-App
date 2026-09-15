'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurants.hasMany(models.Items, {
        foreignKey: 'restaurantId',
        as: 'items'
      });
    }
  }
  Restaurants.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    location: {
        type: DataTypes.STRING,
        allowNull: false
      },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'Restaurants',
  });
  return Restaurants;
};