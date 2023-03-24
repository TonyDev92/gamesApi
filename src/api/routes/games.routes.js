const express = require('express');
const { isAdmin, isAuth } = require('../../middleware/auth');

const router = express.Router();

const {getGame, putGame, getGameById, postGame, deleteGame} = require('../controllers/games.controllers');

router.get('/:id', [isAuth], getGameById);
router.put('/:id', [isAdmin],putGame);
router.delete('/:id',[isAdmin], deleteGame);
router.post('/',[isAdmin], postGame);
router.get('/',[isAuth], getGame);

module.exports = router;