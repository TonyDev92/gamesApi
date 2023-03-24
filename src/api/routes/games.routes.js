const express = require('express');
const upload = require('../../middleware/upload');
const { isAdmin, isAuth } = require('../../middleware/auth');

const router = express.Router();

const {getGame, putGame, getGameById, postGame, deleteGame} = require('../controllers/games.controllers');

router.get('/:id', getGameById);
router.put('/:id', [isAdmin], upload.single('image'),putGame);
router.delete('/:id',[isAdmin], deleteGame);
router.post('/',[isAdmin], upload.single('image'), postGame);
router.get('/', getGame);


module.exports = router;