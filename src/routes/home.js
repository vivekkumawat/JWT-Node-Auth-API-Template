const verifyToken = require("../controllers/verifyToken");
const router = require("express").Router();

router.get("/", verifyToken, (req, res) => {
  userId = req.body._id;
  res.status(200).send("Welcome to home page");
});

module.exports = router;
