const User = require('../models/auth');
const cryptography = require('../helpers/cryptography');


function getAllUsers() {

    return User.find({}).exec();
}

function getUserByID(id) {
    return User.find({ identification: id }).exec();
}

function getUserByUserName(userName) {
    return User.find({ username_email: userName }).exec();
}

async function loginUser(user) {
    if(user.password){
        infusero.password = cryptography.hash(user.password);
        console.log("gen pass");
    }
    return await User.find({"username_email":  user.username_email, "password": user.password}).exec();
}




module.exports = {
    getAllUsers,
    getUserByID,
    getUserByUserName,
    loginUser

}