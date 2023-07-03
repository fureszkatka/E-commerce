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

    let order = []
    console.log(req.body.order)
    
}

exports.getOrder = async(req,res)=>{

    const order = await Orders.findAll()
    res.send(order)
}