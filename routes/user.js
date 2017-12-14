var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Book = require("../models/users.js");

/* GET ALL USERS */
router.get("/", function(req, res, next) {
    Book.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE USER BY ID */
router.get("/:id", function(req, res, next) {
    Book.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE USER */
router.post("/", function(req, res, next) {
    Book.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE USER */
router.put("/:id", function(req, res, next) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE USER */
router.delete("/:id", function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;