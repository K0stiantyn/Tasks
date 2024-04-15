// zad2/routes/books.js
const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/list', booksController.getBooks);

module.exports = router;
