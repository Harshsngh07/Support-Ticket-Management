const router = require("express").Router();
const {
  loginUser,
  registerUser,
  getCurrentProfile,
} = require("../controllers/userControllers");

const { protect } = require("../middlewares/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getCurrentProfile);
module.exports = router;
