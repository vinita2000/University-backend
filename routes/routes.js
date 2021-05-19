const express = require('express');
const router = new express.Router();
const insertUData = require('../controllers/university/insert');
const insertCData = require('../controllers/course/insert');
const {
  pipeline0,
  pipeline1,
  pipeline2,
  pipeline3,
  pipeline4
} = require('../controllers/university/aggregate');

// university routes
router.post('/university/insert', insertUData);
router.post('/university/pipeline0', pipeline0);
router.post('/university/pipeline1', pipeline1);
router.post('/university/pipeline2', pipeline2);
router.post('/university/pipeline3', pipeline3);
router.post('/university/pipeline4', pipeline4);

// courses routes
router.post('/course/insert', insertCData);

module.exports = router;