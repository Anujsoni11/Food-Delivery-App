'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.OrderItem, {
        foreignKey: 'orderId',
        as: 'items'
      });
    }
  }
  Order.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM(
        'Pending',
        'Confirmed',
        'Preparing',
        'OutForDelivery',
        'Delivered',
        'Cancelled'
      )
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};