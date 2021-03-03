const express = require("express");
const router = express.Router();

const books = require("./books");

router.get("/ping", function (req, res, next) {
  res.send({ message: "pong" });
});

router.get("/books", books.getBooksList);
router.get("/books/:id", books.getBooksListById);

router.post("/books", books.saveBook);
router.put("/books", books.editBook);

module.exports = router;
