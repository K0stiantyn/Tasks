const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', userRoutes);
app.use('/', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
