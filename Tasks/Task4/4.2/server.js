const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/success', (req, res) => {
  res.render('Success');
});

app.get('/students-list', (req, res) => {
  res.render('List');
});

app.use((req, res) => {
  res.render('NotFound');
});

const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', (req, res) => {
 
});

app.use(errorController.getNotFoundPage);

