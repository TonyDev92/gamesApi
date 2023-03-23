const express = require('express');
const {postLogin, postLogout, postRegister} = require('../controllers/user.controllers');

const router = express.Router();

router.post('/login', postLogin);
router.post('/register', postRegister);
router.post('/logout', postLogout);

module.exports = router;


