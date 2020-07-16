const Order = require('../models/order');

function getAllOrders() {
return Order.find({}).exec();
}

module.exports = {
    getAllOrders
}