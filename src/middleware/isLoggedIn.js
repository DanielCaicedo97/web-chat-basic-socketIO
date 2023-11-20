const isLoggedIn = (req, res, next) => {
    if (req.cookies.username) {
        next();  // Pasa al siguiente middleware
    } else {
        res.redirect("/register");
    }
};

export default isLoggedIn;