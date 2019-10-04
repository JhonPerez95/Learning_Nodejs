const express = require('express');
const router = express.Router();
const ViewUser = require('../controllers/users');


router.get('/user/all', ViewUser.getAllUser);

module.exports = router;