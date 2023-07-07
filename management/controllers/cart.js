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


ShoppingCart.sync()


exports.getCart = async(req,res)=>{
    try{
        const cart = await ShoppingCart.findAll({where:{
            userid: req.param("user")
        }})
        res.send(cart)
    }catch(error) {
        console.error('Error updating row:', error);
    };
}

ShoppingCart.sync()


exports.addToCart = async(req,res)=>{

    let item = await ShoppingCart.create({
        userid: req.body.userId,
        itemid: req.body.productId,
        quantity: req.body.quantity,
        name: req.body.itemname            
    })
    res.send(item)
       
}

ShoppingCart.sync()
exports.removeFromCart = async(req,res) =>{
    
    try {
        const deletedItem = await ShoppingCart.destroy({
            where: { 
                userid: req.param("user"), 
                id: req.param("item")            
            },
        });
        res.send("Delete success!")
    
    }catch(error) {
        console.error('Error updating row:', error);
    };
} 

ShoppingCart.sync()

exports.setQuantity = async(req,res)=>{
    
    console.log(req.body.quantity)

    try {
        const setQuan = await ShoppingCart.update(
            
            {quantity: req.body.quantity},
            {where:{
                userid: req.param("user"),
                id: req.body.cartid
            }}
        )
        res.send({quantity:req.body.quantity})
    } catch(error) {
        console.error('Error updating row:', error);
    };
}