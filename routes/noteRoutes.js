const router = require("express").Router({ mergeParams: true });
const { protect } = require("../middlewares/authMiddleware");
const { getNotes, addNote } = require("../controllers/noteControllers");

router.route("/").get(protect, getNotes).post(protect, addNote);

module.exports = router;
