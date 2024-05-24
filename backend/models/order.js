// backend/models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user');
const Product = require('./product');

const Order = sequelize.define('Order', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    productIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
    },
    totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'orders',
});

// Associations
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = Order;
