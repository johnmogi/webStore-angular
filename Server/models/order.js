const mongoose = require("mongoose");


// "subTotal" : 8000,
//     "shippingCity" : "Pardes",
//     "shippingStreet" : "Haassis",
//     "shippingDate" : ISODate("2020-06-08T06:48:56.000Z"),
//     "paymentDigits" : 1234,
//     "orderId" : ObjectId("5ee079c2ac1f7c40b02e0d5c"),
//     "orderTime" : ISODate("2020-06-10T06:12:18.636Z")

const OrderSchema = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    subTotal: {
        type: Number,
        required: true
    },
    shippingCity: {
        type: String,
        required: true
    },
    shippingStreet: {
        type: String,
        required: true
    },
    shippingCity: {
        type: String,
        required: true
    },
    shippingCity: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

// CartItemSchema.virtual("CartItem", {
//     ref: "Item",
//     localField: "itemId",
//     foreignField: "_id",
//     justOne: true
// });

OrderSchema.virtual("order", {
    ref: "Order",
    localField: "orderId",
    foreignField: "_id",
    justOne: true
});


const Order = mongoose.model("Order", OrderSchema, "orders");

module.exports = Order;
