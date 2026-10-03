const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");
const { PORT } = require("./config/serverConfig");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", ApiRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});