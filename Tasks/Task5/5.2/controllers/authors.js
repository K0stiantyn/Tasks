// zad2/controllers/authors.js
const Author = require('../models/author');

const authors = [new Author(1, 'Author 1'), new Author(2, 'Author 2')];

exports.getAuthors = (req, res) => {
    res.render('authors', { authors });
};
