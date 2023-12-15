const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

// @description for home route
//Method GET
route.get("/", services.home_route);
// @description for add new user
//Method GET
route.get("/add-user", services.add_user);
// @description for update user
//Method GET
route.get("/update-user", services.update_user);

//REST full api's
// Creating new user
route.post("/api/users", controller.create_user);
// REading or finding user
route.get("/api/users", controller.find_user);
// Updating user
route.put("/api/users/:id", controller.update_user);
// Deleting users
route.delete("/api/users/:id", controller.delete_user);

module.exports = route;
