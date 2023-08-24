const {Users} = require('../models/Associations');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
    const result = await Users.findAll();
    res.json(result);
};

const getSingleUser = async (req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    try {
        const result = await Users.findOne({where: {username: username}});
        const isMatch = await bcrypt.compare(password,result.password);
        if(isMatch && result != null){
            return res.json(result); //MAG good work with the return here!
        }
    } catch (err) {
        console.log("error is: ", err);
        return res.send("User not found");  
    }
};

const addNewUser = async (req, res) => {
    let newUser = req.body;
    const {password} = newUser;
    const hash = await bcrypt.hash(password,10);
    newUser.password = hash
    console.log("new user to create", newUser);
    let result = await Users.create(newUser);
    return res.json(result);
}


const editUser = async (req, res) => {
    const username = req.params.username;
    const result = await Users.findOne(username);
    if(result != null){
        await User.update({Firstname: req.body.Firstname, Lastname: req.body.Lastname}, {where: {Lastname: req.body.Lastname}});
        return res.json(result);
    }
    return res.send("User not found"); 
}

const deleteUser = async (req, res) => {
    const result = await Users.findAll({where: {id: req.body.id}});
    if(result != null){
        await User.destroy({where: {id: req.body.id}});
        return res.json(result);
    }
    return res.send("User not found"); 
}

module.exports = {
    getAllUsers,
    getSingleUser,
    addNewUser,
    editUser,
    deleteUser
}


// need to change edit and delete functions.