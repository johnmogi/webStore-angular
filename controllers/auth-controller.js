const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtLogic = require("../helpers/jwt");

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

// POST http://localhost:3000/api/auth/check-user
router.post("/check-user", async (request, response) => {
  const userMail = request.body.username_email;
  const userID = request.body.identification;

  try {
    const user = await userLogic.getUserByUserName(userMail);
    if (user[0] && user[0].username_email) {
      return response
        .status(403)
        .send({ message: "user Mail is allready taken" });
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const user = await userLogic.getUserByID(userID);
    if (user[0].identification) {
      return response
        .status(403)
        .send({ message: "identification is allready taken" });
    }

    return response.json({ message: "permission granted", user: "ok" });
  } catch (error) {
    return response
      .status(200)
      .send({ message: "permission granted", user: "ok" });
  }
});

// POST http://localhost:3000/api/auth/register
router.post("/register", async (request, response) => {
  const userInfo = request.body;
  userInfo.role = 'Customer'
  userInfo.visitCounter = 0
 // console.log(userInfo)
  
  try {
 await userLogic.addUser(userInfo);
    response.json({ message: "Congratulations, youv'e been added to site" });
  } catch (error) {
    response.status(500).send({ message: "Something went terribly wrong" });
  }
});

// POST http://localhost:3000/api/auth/login
router.post("/login", async (request, response) => {
  const userInfo = request.body;
  try {
    const user = await userLogic.loginUser(userInfo);
    console.log(user)
    if (user[0].password) {
      response.status(200).send({ message: "permission granted", user :"ok" });
    }
    //  response.status(403).send({ message: "Wrong password / username" });
  } catch (error) {
    response.status(403).send({ message: "Wrong password / username" });
  }
});

module.exports = router;
