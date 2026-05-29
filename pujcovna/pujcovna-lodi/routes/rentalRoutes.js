const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/authMiddleware");
const rentalController = require("../controllers/rentalController");

router.post("/:boatId", rentalController.createRequest);
router.get("/", requireLogin, rentalController.getAllRequests);
router.post("/:id/approve", requireLogin, rentalController.approveRequest);
router.post("/:id/reject", requireLogin, rentalController.rejectRequest);

module.exports = router;
