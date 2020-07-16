const User = require('../models/auth');

function getAllUsers() {

    return User.find({}).exec();
}

function getUserByID(id) {
    return User.find({ identification: id }).exec();
}

function getUserByUserName(userName) {
    return User.find({ username_email: userName }).exec();
}


module.exports = {
    getAllUsers,
    getUserByID,
    getUserByUserName

}