const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
    .status(404)
    .send(JSON.stringify({
      message: 'Not found'
    }), null, 3);
});

app.listen(3000);