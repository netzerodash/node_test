const express = require("express");

const app = express();

const PORT = 5555;

app.get("/api", (req, res) => res.send("This message sent from API"));
app.listen(PORT, () => {
  console.log(`Server is running... on PORT: ${PORT}`);
});
module.exports = app;
