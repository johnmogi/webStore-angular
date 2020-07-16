require("./data-access-layer/dal");
const express = require('express');
const server = express();
const cors = require('cors')
global.config = require("./config");
const { port } = require("./config");

server.use(cors());
// server.use(cors({ origin: "http://localhost:4200", credentials: true }));
// Need those exact configuration for the session cookie to be saved at client side.

const itemController = require("./controllers/item-controller");
const authController = require("./controllers/auth-controller");
const orderController = require("./controllers/order-controller");


server.use('/api/items', itemController);
server.use('/api/users', authController);
server.use('/api/orders', orderController);



server.listen({ port }, () => console.log(`Listening on http://localhost:${port}`));

