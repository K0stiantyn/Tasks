const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const students = [];
let nextId = 1;


const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');


app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', studentsController.addStudent);
app.get('/students-list', studentsController.getStudentsListPage);


app.use(errorController.getNotFoundPage);
