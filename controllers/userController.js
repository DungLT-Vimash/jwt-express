const User = require("../models/User");
const Todo = require("../models/Todo");
const mongoose = require("mongoose");

const userController = {
  //GET ALL USER
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE A USER
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Todo
  getAllTodo: async (req, res) => {
    try {
      console.log(req.user.id);
      const todo = await Todo.find({ user: req.user.id });
      // console.log(req.user.id);
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        ...req.body,
        user: mongoose.Types.ObjectId(req.user.id),
      });
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateTodo: async (req, res) => {
    try {
      // req.params.id
      const todo = await Todo.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todo = await Todo.deleteOne({ _id: req.params.id });
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
