const express = require('express');

const router = express.Router();
const users = [
  {
    name: "Jokowi",
    age: 51,
    occupation: "President"
  },
  {
    name: "Makrup",
    age: 89,
    occupation: "Vice President"
  }
];

router.get('/users', (req, res, next) => {
  console.log("On this path /users");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users), null, 3);
});

router.get('/', (req, res, next) => {
  console.log("On this path /");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(['']), null, 3);
});

module.exports = router;