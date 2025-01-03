const express = require("express");
const path = require("node:path");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// app.get("/", (req, res) => res.send("Hello World"));

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);
/*
app.use((req, res, next) => {
  throw new Error("OH NO!");
  // or next(new Error("OH NO!"));
});
*/

// Every thrown error in the application or the previous middleware function calling `next`
// with an error as an argument will eventually go to this middleware function
/*
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});
*/
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class
  // and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My First Express app - listening on port ${PORT}`);
});
