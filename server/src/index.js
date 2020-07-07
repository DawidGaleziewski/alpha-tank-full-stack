// npm packages
const express = require("express");
const validator = require("validator");
const path = require("path");

require("./db/mongoose");

const app = express();

// constant values
const port = process.env.PORT || 5000;

// Routers
const userRouter = require("./routers/users");
const tankRouter = require("./routers/tanks");
const testsRouter = require("./routers/tests");

// Register
app.use(express.json());
app.use(userRouter);
app.use(tankRouter);
app.use(testsRouter);

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
const root = require("path").join(__dirname, "client");
app.use(express.static(root));

app.get("*", (req, res) => {
  res.sendFile("index.html", root);
});

// }

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
