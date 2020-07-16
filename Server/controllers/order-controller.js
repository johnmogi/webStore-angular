const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const orderLogic = require('../business-logic/order-logic');


router.get('/', async (request, response) => {
    try {
        const orders = await orderLogic.getAllOrders();
        console.log(orders)
        response.json(orders);
    } catch (error) {
        response.status(500).send(error);
    }
});

// router.get('/cats', async (request, response) => {
//     try {
//         const cats = await itemLogic.getAllCats();
//         response.json(cats);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });
// // GET http://localhost:3000/api/items/by-cat/5edc83e2b1dedd683d1901c3
// router.get('/by-cat/:cat', async (request, response) => {
//     try {
//         const cat = await request.params.cat
//         const items = await itemLogic.getAllItemFromCat(cat);
//         response.json(items);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });


module.exports = router;