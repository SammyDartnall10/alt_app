const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Intit Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "welcome to alt work" }));

//Define our routes
// app.use("/routes", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/location", require("./routes/api/location"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/preferences", require("./routes/api/preferences"));
app.use("/api/review", require("./routes/api/review"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Alt work : Server statrted on port ${PORT}`)
);
