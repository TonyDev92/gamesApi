const express = require('express');
const {postLogin, postcheck, postRegister} = require('../controllers/user.controllers');
const {isAuth,isAdmin} = require('../../middleware/auth')

const router = express.Router();

router.post('/login', postLogin);
router.post('/register', postRegister);
router.post('/postcheck',[isAuth], postcheck);
router.post('/admin', [isAdmin],postLogin);

module.exports = router;


