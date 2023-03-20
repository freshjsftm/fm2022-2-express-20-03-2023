const users = [];

module.exports.createUser = async (req, res) => {
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

module.exports.showUsers = async (req, res) => {
  res.send(users);
};

module.exports.updateUser = async (req, res) => {
  res.send("update user with id = " + req.params.id);
}