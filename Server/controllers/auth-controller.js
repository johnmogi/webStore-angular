const express = require("express");
const router = express.Router();
const User = require("../models/auth");
const userLogic = require("../business-logic/auth-logic");

router.get("/", async (request, response) => {
  try {
    const users = await userLogic.getAllUsers();
    response.json(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// check user by identification:
// GET http://localhost:3000/api/users/by-id/123456789
router.get("/by-id/:id", async (request, response) => {
  try {
    const id = await request.params.id;
    const user = await userLogic.getUserByID(id);
    response.json(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

// check user by userName:
// GET http://localhost:3000/api/auth/by-userName/1@1.com
router.get("/by-userName/:userName", async (request, response) => {
  try {
    const userName = await request.params.userName;
    const user = await userLogic.getUserByUserName(userName);
    response.json(user);
  } catch (error) {
    response.status(500).send(error);
  }
});
// POST http://localhost:3000/api/auth/login
router.post("/login", async (request, response) => {
  const userInfo = request.body;
  try {
    const user = await userLogic.loginUser(userInfo);
    console.log(user, user[0] )
if(!user[0].username_email && !user[0].password){
    response.status(403).send({ message: "Wrong password / username" });

}
    response.json({ message: "permission granted" });
  } catch (error) {
    response.status(403).send({ message: "Wrong password / username" });
  }
});

module.exports = router;
