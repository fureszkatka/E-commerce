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
    },
    quantity: {
        type: Sequelize.DataTypes.INTEGER,
    }
    
}, {
    tableName: "Orders",modelName:"Orders"
});

Orders.sync();

exports.addOrder = async(req,res)=>{



    for(i = 0;i < req.body.orders.length; i++){
        let order = await Orders.create({
            userId: req.param("user"),
            itemId: req.body.orders[i].item,
            itemName: req.body.orders[i].itemName,
            quantity: req.body.orders[i].itemQuantity
        })
    }
    res.send("upload success")
}

Orders.sync();


exports.getOrder = async(req,res)=>{

    const order = await Orders.findAll({where:{
        userId: req.param("user")
    }})
    res.send(order)
}