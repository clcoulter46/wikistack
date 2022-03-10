const express = require("express");
const res = require("express/lib/response");
const app = express();
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require("./models"); // <-
const wikiRouter = require("./routes/wiki");
const usersRouter = require("./routes/users");

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);
app.use("/users", usersRouter);

// app.use('',(req,res)=>{
//   res.sendFile(__dirname + '/public/style.css')
// }) //this gave us the text of the style sheet.

app.use("", (req, res) => {
  res.send(layout());
}); // accesses layout and makes that the background display for all pages

app.get("/", (req, res) => {
  res.send("hello world");
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await db.sync({ force: true });
  app.listen(3000, () => {
    console.log(`app listening in port 3000`);
  });
};

// put's both sync after listening, then it's syncing the tables

init();
