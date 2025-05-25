const isLogged = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/user/no-permission');
  }
  next();
};

module.exports = isLogged;
