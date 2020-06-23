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
app.use("/api/users", require("./routes/api/users"));
// app.use("/auth", require("./routes/auth"));
// app.use("/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Alt work : Server statrted on port ${PORT}`)
);
