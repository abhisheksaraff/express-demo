// controllers/authorController.js

const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

// Using Express Async-Handler
const asyncHandler = require("express-async-handler");

// The function will automatically catch any errors thrown and call the next function
const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
});

// Using Try-Catch
/*
async function getAuthorById(req, res) {
  const { authorId } = req.params;

  try {
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      res.status(404).send("Author not found");
      return;
    }

    res.send(`Author Name: ${author.name}`);
  } catch (error) {
    console.error("Error retrieving author:", error);
    res.status(500).send("Internal Server Error");

    // or we can call next(error) instead of sending a response here
    // Using `next(error)` however will only render an error page in the express'
    // default view and respond with the whole html to the client.
    // So we will need to create a special type of middleware function
    // if we want a different response and we will get to that in a bit.
  }
}
*/

module.exports = { getAuthorById };
