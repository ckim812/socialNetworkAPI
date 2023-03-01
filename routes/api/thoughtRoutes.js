const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought
} = require("../../controller/thoughtController");
const { User, Thought } = require("../../models");

router.route("/").get(getThoughts).post(createThought); // get all thoughts and create a new thought
router.route("/:thoughtId").get(getOneThought).put(updateThought).delete(deleteThought); // get and delete a single thought by id

module.exports = router;
