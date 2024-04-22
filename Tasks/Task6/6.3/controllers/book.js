const User = require('../models/User');
const Book = require('../models/Book');

const bookController = {
    getBookDetails: (req, res) => {
        const userId = req.session.userId;
        const bookId = req.params.id;
        const book = Book.getAll().find(book => book.id === parseInt(bookId));
        const user = User.getAll().find(user => user.id === userId);
        const didUserBorrowTheBook = user ? user.findBorrowedBookById(book.id) : false;
        res.render("book-details", { title: "Book Details", book, didUserBorrowTheBook });
    },
    postBookBorrow: (req, res) => {
        const bookId = req.params.id;
        const book = Book.getAll().find(book => book.id === parseInt(bookId));
        const userId = req.session.userId;
        const user = User.getAll().find(user => user.id === userId);
        if (book && user) {
            book.borrow();
            user.borrowBook(book);
            res.redirect("/books/borrow/success");
        } else {
            res.redirect("/not-found");
        }
    },
    getBookBorrowSuccess: (req, res) => {
        res.render("success", { title: "Success", message: "Book borrowed successfully" });
    },
    postBookReturn: (req, res) => {
        const bookId = req.params.id;
        const book = Book.getAll().find(book => book.id === parseInt(bookId));
        const userId = req.session.userId;
        const user = User.getAll().find(user => user.id === userId);
        if (book && user) {
            book.return();
            user.returnBook(bookId);
            res.redirect("/books/return/success");
        } else {
            res.redirect("/not-found");
        }
    },
    getBookReturnSuccess: (req, res) => {
        res.render("success", { title: "Success", message: "Book returned successfully" });
    }
};

module.exports = bookController;
