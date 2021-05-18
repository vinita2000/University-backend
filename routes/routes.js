const express = require('express');
const router = new express.Router();
const insertUData = require('../controllers/university/insert');
const insertCData = require('../controllers/course/insert');

// university routes
router.post('/university/insert', insertUData);

// courses routes
router.post('/course/insert', insertCData);

module.exports = router;