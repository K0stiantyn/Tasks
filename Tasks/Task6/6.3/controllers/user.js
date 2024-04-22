const User = require('../models/User');

const userController = {
    getSetUserSession: (req, res) => {
        const users = User.getAll();
        res.render("set-user-session", { title: "Set User Session", users });
    },
    setUserSession: (req, res) => {
        req.session.userId = req.body.userId;
        res.redirect("/");
    }
};

module.exports = userController;
