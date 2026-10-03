'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    paymentMethod: {
      type: DataTypes.ENUM,
      values: ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'],
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['Pending', 'Completed', 'Failed', 'Refunded'],
      allowNull: false
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};