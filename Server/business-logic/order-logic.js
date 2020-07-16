const Order = require('../models/order');

function getAllOrders() {
return Order.find({}).exec();
}

// function getAllCats() {
//     return Cat.find({}).exec();
// }
// function getAllItemFromCat(cat) {
//     return Cat.find({ _id: cat }).exec();
// }


module.exports = {
    getAllOrders
}