const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
} = require("../../controller/thoughtController");
const { User, Thought } = require("../../models");

router.route("/").get(getThoughts).post(createThought); // /api/thoughts/
router.route("")

module.exports = router;
