const express = require("express");
const res = require("express/lib/response");
const morgan = require("morgan");
const router = express.Router();

const app = express();

router.get("/", (req, res) => {
  res.send("this is from wiki");
});

router.get("/add", (req, res) => {
  res.send("this is for wiki/add");
});

router.post("/", (req, res) => {
  res.send("this is from router.post");
});

module.exports = router;
