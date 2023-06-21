const Sequelize = require('sequelize');

const sequelize = new Sequelize('kate_style', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define the shopping item model
const ShoppingItem = sequelize.define('ShoppingItem', {
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

exports.getItems = async(req,res) =>{
    let items = await ShoppingItem.findAll()

    return res.json({items:items})
}