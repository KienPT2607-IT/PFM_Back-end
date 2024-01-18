var express = require('express');
var router = express.Router();

// * Login: "localhost:3000/users/login"
router.get('/login', async (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
