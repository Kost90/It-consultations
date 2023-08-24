const jwt = require("jsonwebtoken"); // Import
const bcrypt = require('bcrypt'); 
const secret = "Manuel_Prince_Kostiantyn";
const {Users} = require('../models/Associations')

const LoginAutorization = async (req,res) =>{
    let {username,password} = req.body;
    let userSigningIn = await Users.findOne ({where: {username: username}});
    const isMatch = await bcrypt.compare(password,userSigningIn.password);
    try {
        if(isMatch && result != null){
            const payload = {username};
            const token = jwt.sign(payload, secret, {expiresIn:'30m'});
            console.log(token);
            return res.status(200).send(token); //MAG good work with the return here!
        }
    } catch (err) {
        console.log("error is: ", err);
        return res.send("User not found");  
    }
};

module.exports = {LoginAutorization};