// /

const {Router} = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Home"));
indexRouter.get("/about", (req, res) => res.send("About"));
indexRouter.get("/contact", (req, res) => res.send("Gettng Contact"));
indexRouter.post("/contact", (req, res) => res.send("Posting Contact"));

module.exports = indexRouter;