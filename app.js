const express = require("express");
const validate = require("./middlewares/validate.mw");
const UserController = require("./controllers/user.controller");
const app = express(); //create server
const PORT = 3000;

const parseBody = express.json();

app.get("/users", UserController.showUsers);
app.post("/users", parseBody, validate, UserController.createUser);
app.put("/users/:id", parseBody, validate, UserController.updateUser);
app.patch("/users", () => {});
app.delete("/users", () => {});

app.listen(PORT, () => {
  console.log("server started at port " + PORT);
}); //run server
