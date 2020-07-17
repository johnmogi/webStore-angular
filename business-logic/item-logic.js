const Item = require('../models/item');
const Cat = require('../models/category')

function getAllItems() {
    return Item.find({}).populate("categories").exec();

    //  return Item.find({}).exec();
}
function getAllCats() {
    return Cat.find({}).exec();
}
function getAllItemFromCat(cat) {
    return Cat.find({ _id: cat }).exec();
}


module.exports = {
    getAllItems,
    getAllCats,
    getAllItemFromCat
}