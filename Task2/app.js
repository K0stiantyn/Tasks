const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home', { pageName: 'Home Page' });
});

app.get('/student', (req, res) => {
    res.render('student', { pageName: 'Student Page' });
});
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.post('/student', (req, res) => {
    const { firstName, lastName, age, gender, code, studyField } = req.body;
    res.send('Form submitted successfully!');
});
