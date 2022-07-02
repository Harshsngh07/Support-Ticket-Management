const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketControllers");

//re-routing
//we want routes to be like /api/tickets/ticketId/notes
//for that we use MergeParams to be true in note routes then we import note routes to ticket routes

const noteRouter = require("./noteRoutes");
router.use("/:ticketId/notes", noteRouter);

router.route("/").get(protect, getTickets).post(protect, createTicket);
router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
