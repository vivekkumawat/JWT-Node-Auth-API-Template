const router = require("express").Router();
const authRoutes = require("./auth");
const homeRoutes = require("./home");

// Authentication Routes
router.use("/auth", authRoutes);

// Private Routes
router.use("/home", homeRoutes);

module.exports = router;
