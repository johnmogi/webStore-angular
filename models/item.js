const mongoose = require("mongoose");



const ItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },

    catID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: false
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

ItemSchema.virtual("category", {
    ref: "Category",
    localField: "catID",
    foreignField: "_id",
    justOne: true
});
const Item = mongoose.model("Item", ItemSchema, "order-items");

module.exports = Item; 
