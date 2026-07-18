const express = require('express')
const authContoller = require('../controllers/auth.controller')

const router = express.Router();

router.post('/register' , authContoller.registerUser )


module.exports = router;
