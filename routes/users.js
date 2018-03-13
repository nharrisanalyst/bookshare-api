var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is an API for a bookshare if you dont have a token you wont be able to acces any of this api');
});

module.exports = router;
