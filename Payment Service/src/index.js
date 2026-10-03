const express = require("express");
const PORT = 3003;

const app = express();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});