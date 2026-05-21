require("dotenv").config();
const express = require("express");
const path = require("path");

const connectDB = require("./config/db");
const boatRoutes = require("./routes/boatRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

connectDB();

app.use("/boats", boatRoutes);

app.get("/", (req, res) => {
  res.redirect("/boats");
});

app.listen(PORT, () => {
  console.log(`Server bezi na adrese http://localhost:${PORT}`);
});
