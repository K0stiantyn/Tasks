const Book = require('../models/Book');

const bookController = {
    getBooksList: (req, res) => {
        const userId = req.session.userId;
        const books = Book.getAll();
        res.render("books", { title: "Books", userId, books });
    },
    getBookDetails: (req, res) => {
        const bookId = req.params.id;
        const book = Book.getById(bookId);
        if (book) {
            res.render("book-details", { title: "Book Details", book });
        } else {
            res.status(404).send("Book not found");
        }
    }
};

module.exports = bookController;
