const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const boatController = require("../controllers/boatController");
const requireLogin = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get("/", boatController.getAllBoats);
router.get("/create", requireLogin, boatController.showCreateForm);
router.post("/", requireLogin, upload.single("image"), boatController.createBoat);
router.get("/:id/edit", requireLogin, boatController.showEditForm);
router.put("/:id", requireLogin, upload.single("image"), boatController.updateBoat);
router.delete("/:id", requireLogin, boatController.deleteBoat);
router.get("/:id", boatController.getBoatDetail);

module.exports = router;
