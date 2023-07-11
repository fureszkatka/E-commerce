const Sequelize = require("sequelize")


//Setup connection with database
const sequelize = new Sequelize('kate_style', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

//Define table and rows for databases
const Orders = sequelize.define('Orders', {
   
    userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    itemId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    itemName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    isOrdered: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }   
    
}, {
    tableName: "Orders",modelName:"Orders"
});

Orders.sync();

exports.addOrder = async(req,res)=>{
    try{
        for(i = 0;i < req.body.orders.length; i++){
            let order = await Orders.create({
                userId: req.param("user"),
                itemId: req.body.orders[i].item,
                itemName: req.body.orders[i].itemName,
                quantity: req.body.orders[i].itemQuantity
            })
        }
        res.send(cart)
    }catch(error) {
        console.error('Error updating row:', error);
    };
}

Orders.sync();


exports.getOrder = async(req,res)=>{

    const order = await Orders.findAll({where:{
        userId: req.param("user"),
        isOrdered: false
    }})
    res.send(order)
}

exports.checkout = async(req,res)=>{

    console.log(req.body.order[0].id)

    for(i=0;i < req.body.order.length; i++){
        console.log(req.body.order[i].id)
        const Checkout = await Orders.update(
            {isOrdered: true},
            {where:{
                userid: req.param("user"),
                id: req.body.order[i].id
            }}
        )
    }
    

}