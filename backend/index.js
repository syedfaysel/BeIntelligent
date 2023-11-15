const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ project: "Beintelligent" });
});

app.listen(3000, () => {
  console.log(`listening on port http://localhost:3000`);
});
