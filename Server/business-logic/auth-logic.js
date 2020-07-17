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

 function loginUser(user) {
    if(user.password){
        user.password = cryptography.hash(user.password);
    }
    console.log(user.password)
    return User.find({"username_email": user.username_email, "password": user.password}).exec();
}
function addUser(user) {
    console.log(user)
        user.password = cryptography.hash(user.password);
    return user.save();

}



module.exports = {
    getAllUsers,
    getUserByID,
    getUserByUserName,
    loginUser,
    addUser

}