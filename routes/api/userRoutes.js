const router = require("express").Router();
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controller/userController");
const { User, Thought } = require("../../models");

router.route("/").get(getUsers); // /api/thoughts/

router.route("/create").get(getUsers).post(createUser); // /api/thoughts/create

module.exports = router;
