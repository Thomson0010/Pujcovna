const express = require("express");
const router = express.Router();
const boatController = require("../controllers/boatController");
const requireLogin = require("../middlewares/authMiddleware");

router.get("/", boatController.getAllBoats);
router.get("/:id", boatController.getBoatDetail);

module.exports = router;
