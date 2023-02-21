const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
} = require("../../controller/thoughtController");
const { User, Thought } = require("../../models");

router.route("/").get(getThoughts); // /api/thoughts/

router.route("/create").get(getThoughts).post(createThought); // /api/thoughts/create

module.exports = router;
