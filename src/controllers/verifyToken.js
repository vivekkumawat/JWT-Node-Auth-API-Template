const jwt = require("jsonwebtoken");

module.exports = function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = verifiedToken;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
