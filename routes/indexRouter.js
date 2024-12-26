// /

const { Router } = require("express");
const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

indexRouter.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

//indexRouter.get("/", (req, res) => res.send("Home"));
/*
indexRouter.get("/", (req, res) =>
  res.render("index", { message: "Home from EJS!" })
);
*/

indexRouter.get("/about", (req, res) => res.send("About"));
indexRouter.get("/contact", (req, res) => res.send("Gettng Contact"));
indexRouter.post("/contact", (req, res) => res.send("Posting Contact"));

module.exports = indexRouter;
