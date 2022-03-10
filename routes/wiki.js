const express = require("express");
const res = require("express/lib/response");
const morgan = require("morgan");
const router = express.Router();
// const { Page } = require("../models");
// const { addPage } = require("../views"); //these two needed for url slug
//const wikipage = require("../wikipage");

const app = express();

router.get("/", (req, res) => {
  res.send("this is from wiki");
});

router.get("/add", (req, res) => {
  res.send("this is for wiki/add");
});



router.post("/", async (req, res,next) => {
  //res.json(req.body); used to see what would be stored after submitting a new page via addPage.js

  // try {
  //   const page = await Page.create({
  //     title: "???????",
  //     content: "???????"
  //   });

  //   // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
  //   res.redirect('/');
  // } catch (error) { next(error) }
  //throws error bc url slug not provided.
  //next step of module (Improving our Model: Hooks)
  res.send('this is from router.post')
});

module.exports = router;
