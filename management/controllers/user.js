const Sequelize = require("sequelize")
const ejwt = require("jsonwebtoken")
require('dotenv').config()
var { expressjwt: jwt } = require("express-jwt");


//Setup connection with database
const sequelize = new Sequelize('kate_style', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

//Define table and rows for databases
const Users = sequelize.define('Users', {
   
    name: {
        type: Sequelize.DataTypes.STRING,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        unique: true
    },
    password: {
        type: Sequelize.DataTypes.STRING,
    }
    
}, {
    tableName: "Users",modelName:"Users"
});

Users.sync();


//Signup user
exports.signup = async(req,res) =>{
 
    if(res.error){
        res.status(400).json({error:res.error })
    }
    else{

        const userExists = await Users.findOne({ where: { email: req.body.email } })
        if(userExists){
            return res.status(403).json({
                error: "Email is taken!"
            })
        }
        else{
            const user = await Users.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password            
            })

            return res.status(200).json({
                message: "Signup success!"
            })
        }
    }
    
}
