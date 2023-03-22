const express = require('express');

const router = express.Router();

const {getGame, putGame, getGameById, postGame, deleteGame} = require('../controllers/games.controllers');

router.get('/:id', getGameById);
router.put('/:id', putGame);
router.delete('/:id', deleteGame);
router.post('/', postGame);
router.get('/', getGame);

module.exports = router;