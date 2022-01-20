const withAuth = (req, res, next) => {
    // If not logged in then redirect to login route
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;