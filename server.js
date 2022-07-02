require("dotenv").config();
const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const path = require("path");

//connect to db
connectDB();

// const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middlewares
const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");

//routes
app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use(errorHandler);

//serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(__dirname, "frontend", "build", "index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Support Desk Api" });
  });
}

app.listen(process.env.PORT || 6000, () => {
  console.log("Server running");
});
