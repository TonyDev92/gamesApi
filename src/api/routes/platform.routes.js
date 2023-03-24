const express = require('express');
const { isAdmin, isAuth } = require('../../middleware/auth');

const {getPlatform, getPlatformById, putPlatform, postPlatform, deletePlatform} = require('../controllers/platform.controllers');
const router = express.Router();

router.get('/:id', getPlatformById);
router.put('/:id', [isAdmin], putPlatform);
router.delete('/:id', [isAdmin], deletePlatform);
router.get('/', getPlatform);
router.post('/', [isAdmin], postPlatform);

module.exports = router;

