// routes/bookRouter

const { Router } = require("express");
const bookerRouter = Router();

bookerRouter.get("/", (req, res) => res.send("All books"));

bookerRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

bookerRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Get Book ID: ${bookId}`);
});

bookerRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Post Book ID: ${bookId}`);
});

module.exports = bookerRouter;
