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

    try{
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
    }catch(error) {
        console.error('Error updating row:', error);
    };
    
}


exports.login = async (req, res) => {

    const { email, password } = req.body
    const userMatch = await Users.findOne({ where: { email: email, password: password } })
        
    if (!userMatch) {
        return res.status(401).json({
            error: "Incorrect email or password!"
        })
    }
    else {
        try{
        //define token
            const token = ejwt.sign({ _id: userMatch.id }, "fsdfjks-fol_H_IFL_FKESKÉRJOWPHRFIWEIFPWEFÁHIA")

            res.cookie("kate-style-token", token, { expire: new Date() + 9999 })
            const { id, name, email } = userMatch
            console.log("usermatchhhh --->>",userMatch)
            return res.json({ token, user: { id, email, name } })
        }catch(error) {
            console.error('Error updating row:', error);
        };
    }  

}

//Signout user
exports.signout = (req,res) =>{
    try{
        res.clearCookie("kate-style-token")
        return res.json({message: "signout"})
    }catch(error) {
        console.error('Error updating row:', error);
    };
}

//Check jwt token
exports.requireSignin = jwt({
    secret: "fsdfjks-fol_H_IFL_FKESKÉRJOWPHRFIWEIFPWEFÁHIA",
    algorithms: ["HS256"],
    getToken: (req) => req.cookies["kate-style-token"]
})

//Make profile based on the root parameter 
exports.userById = async(req, res) => {
    
    const user = await Users.findOne({ where:{ id: req.auth._id }})
    if(user){
        return res.send(user) 
    }
    else{
        res.send("no user")
    }
}