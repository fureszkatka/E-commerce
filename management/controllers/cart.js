const Sequelize = require('sequelize');

const sequelize = new Sequelize('kate_style', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {}

ShoppingCart = sequelize.define('ShoppingCart', {
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
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
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

module.exports.ShoppingCart = ShoppingCart

ShoppingCart.sync()


module.exports.getCart = async(req,res)=>{
    
    const cart = await ShoppingCart.findAll({where:{
        userid: req.param("user")
    }})
    if(cart){
        console.log({Cart:cart}) 
        res.send(cart)
    }else{
        return null
    }
}

ShoppingCart.sync()


module.exports.addToCart = async(req,res)=>{

    console.log("requueeesttttttttt",req.body)

    const item = await ShoppingCart.create({
        userid: req.body.userId,
        itemid: req.body.productId,
        quantity: req.body.quantity,
        name: req.body.itemname            
    })

    res.send(item)
}