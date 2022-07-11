adminMiddleware = function (req, res, next) {
    if (!req.session.usuario || req.session.usuario.role == 1) {
       return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware