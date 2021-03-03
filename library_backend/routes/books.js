const bookJson = require("../public/books.json");
// const fs = require("fs");

const getBooksList = async (req, res) => {
  try {
    res.send(bookJson);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const getBooksListById = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ message: "Id is required" });
    }
    let return_obj = bookJson && bookJson.books.find(
      (item) => item.id === parseInt(req.params.id)
    );

    res.send(return_obj);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const saveBook = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({ message: "Name is required" });
    }
    bookJson.books.push({ ...req.body, id: new Date().getTime() });
    res.send(bookJson);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const editBook = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({ message: "Name is required" });
    }
    for (let i = 0; i < bookJson.books.length; i++) {
      if (req.body.id === bookJson.books[i].id) {
        bookJson.books[i] = req.body;
        break;
      }
    }
    res.send(bookJson);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = {
  getBooksList,
  saveBook,
  editBook,
  getBooksListById,
};
