module.exports = (req, res, next) => {
  req.user = { id: 1, role: "admin", name: "Super Admin" };
  next();
};