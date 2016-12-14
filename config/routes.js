var express = require('express');
var router = express.Router();
var concertsController = require('../controllers/concerts')
var request = require('request');

/* GET home page. */
// API Documentation Landing Page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'project4' });
});

router.route('/jambase')
  .get(concertsController.index)


// API Routes, respond with JSON only
router.route('/api/concerts')
  .get(concertsController.index)
  .post(concertsController.create);

router.route('/api/concerts/:id')
  .get(concertsController.show)
  .patch(concertsController.update)
  .delete(concertsController.destroy);

module.exports = router;
