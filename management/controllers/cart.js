const Sequelize = require('sequelize');

const sequelize = new Sequelize('kate_style', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const ShoppingCart = sequelize.define('ShoppingCart', {
    userid: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    quantity: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

ShoppingItem.sync();
