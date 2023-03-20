const express = require("express");
const yup = require("yup");
const app = express(); //create server
const PORT = 3000;
const users = [];

const parseBody = express.json();
const validate = async (req, res, next) => {
  const validationSchema = yup.object({
    name: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    password: yup.string().trim().required(),
    gender: yup.boolean(),
  });
  try {
    req.body = await validationSchema.validate(req.body);
    next();
  } catch (error) {
    res.send(error.message);
  }
};
const createUser = async (req, res) => {
  try {
    const user = req.body;
    user.id = users.length;
    delete user.password;
    user.createdAt = new Date();
    users.push(user);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const showUsers = async (req, res) => {
  res.send(users);
};

app.get("/users", showUsers);
app.post("/users", parseBody, validate, createUser);
app.put("/users/:id", async (req, res) => {
  res.send("update user with id = " + req.params.id);
});


app.patch("/users", () => {});
app.delete("/users", () => {});

app.listen(PORT, () => {
  console.log("server started at port " + PORT);
}); //run server
