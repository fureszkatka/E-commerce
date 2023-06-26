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
    itemid: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

ShoppingCart.sync()


exports.getCart = async(req,res)=>{
    
    const cart = await ShoppingCart.findAll({where:{
        id: req.userid
    }})
    console.log(cart)
}

exports.addToCart = (req,res)=>{
    return "hex"
}