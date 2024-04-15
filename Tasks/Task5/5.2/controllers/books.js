// zad2/controllers/books.js
const Book = require('../models/book');

const books = [new Book(1, 'Book 1', 2000, 1), new Book(2, 'Book 2', 2010, 2)];

exports.getBooks = (req, res) => {
    res.render('books', { books });
};
