const Sequelize = require("sequelize")
const {ShoppingCart} = require("./cart")


//Setup connection with database
const sequelize = new Sequelize('kate_style', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

//Define table and rows for databases
const Order = sequelize.define('Order', {
   
    userId: {
        type: Sequelize.DataTypes.NUMBER,
        allowNull: false
    },
    itemId: {
        type: Sequelize.DataTypes.NUMBER,
        allowNull: false
    },
    itemName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.DataTypes.NUMBER,
        allowNull: false
    }
    
}, {
    tableName: "Order",modelName:"Order"
});

Order.sync();

exports.addOrder = async(req,res)=>{

    let orders = []

    while(req.body.order.length < i){
        let cart = await ShoppingCart.findAll({where:{
            id: order.id
        }})
        orders.push(cart)
        console.log(orders)
    }


    if(req.body.order){
        i = 0
            
            const item = await Order.create({
                userId: req.body.userId,
                itemid: req.body.productId,
                quantity: req.body.quantity,
                name: req.body.itemname            
            })
            i++
    }
}

exports.getOrder = async(req,res)=>{

    const order = await Order.findAll()
    res.send(order)
}