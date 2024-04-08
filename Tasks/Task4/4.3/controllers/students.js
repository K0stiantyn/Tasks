const getAddNewStudentPage = (req, res) => {
  res.render('Home');
};

const addStudent = (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body;

  const newStudent = {
    id: nextId++,
    fullName,
    code,
    fieldOfStudies,
  };

  students.push(newStudent);

  res.redirect('/success');
};

const getStudentsListPage = (req, res) => {
  res.render('List', { students }); // Pass student data to the view
};

const getAddingNewStudentSuccessPage = (req, res) => {
  res.render('Success');
};

module.exports = {
  getAddNewStudentPage,
  addStudent,
  getStudentsListPage,
  getAddingNewStudentSuccessPage,
};
