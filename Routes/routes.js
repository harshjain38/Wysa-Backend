const express = require('express');
const assessmentController = require('../Controller/controller');
const router = express.Router();

router
    .route('/')
    .post(
        assessmentController.submit
    );

module.exports=router;