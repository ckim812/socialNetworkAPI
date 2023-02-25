const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require("../../controller/userController");
const { User, Thought } = require("../../models");

router.route("/").get(getUsers).post(createUser); // get all users and create a new user
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser); // get one user by id and update user by id
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend); // get one user by id and update user by id

module.exports = router;
