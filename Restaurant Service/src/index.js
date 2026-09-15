const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index.js');
const {PORT} = require('./config/serverConfig.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});