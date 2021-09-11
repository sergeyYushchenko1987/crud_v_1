require("module-alias/register");
const express = require("express");
const config = require("config");
const bookRoute = require("@routes/BookRoute");

const PORT = config.get("constants.PORT");
const app = express();

app.use("/book", bookRoute);

app.get("/", (req, res) => {
  res.end("Server works");
});

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}`);
});
