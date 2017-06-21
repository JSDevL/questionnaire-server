var express = require('express');
var router = express.Router();

var Section = require('../models/section');

/* GET users listing. */
router.get('/', function (req, res, next) {
    Section.find(req.query, {questions: 0}).exec( function(err, sections) {
        if (err) {
            next(err);
        } else {
            res.status(200);
            res.json(sections);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Section.findByIdAndUpdate(req.params['id'], req.body, {new: true}, function(err, section) {
        if (err) {
            next(err);
        } else {
            res.status(200);
            res.json(section);
        }
    });
});

module.exports = router;
