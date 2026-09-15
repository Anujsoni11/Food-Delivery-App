const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig.js');

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});