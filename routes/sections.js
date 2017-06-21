var express = require('express');
var router = express.Router();

var Section = require('../models/section');

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

router.get('/:id', function (req, res, next) {
    Section.findById(req.params['id'], function(err, section) {
        if (err) {
            next(err);
        } else {
            res.status(200);
            console.log(section);
            res.json(section);
        }
    });
});

router.put('/:id', function (req, res, next) {
    var newSection = new Section(req.body);
    newSection.save( function(err, section) {
        Section.findByIdAndUpdate(req.params['id'], req.body, {new: true}, function(err, section) {
            res.status(200);
            if (err) {
                next(err);
            } else {
                res.json(section);
            }
        });
    });
});

router.post('/', function (req, res, next) {
    Section.findByIdAndUpdate(req.params['id'], req.body, {new: true}, function(err, section) {
        res.status(200);
        if (err) {
            next(err);
        } else {
            res.json(section);
        }
    });
});

module.exports = router;
