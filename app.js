const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

// app.get("/", (req, res) => res.send("Hello World"));

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`My First Express app - listening on port ${PORT}`);
});