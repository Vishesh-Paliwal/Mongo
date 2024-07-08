const UserModel = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await UserModel.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json({ message: "User Created", user: newUser });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    return res.json(allUsers);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(deletedUser);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
