const express = require('express');

const {getPlatform, getPlatformById, putPlatform, postPlatform, deletePlatform} = require('../controllers/platform.controllers');
const router = express.Router();

router.get('/:id', getPlatformById);
router.put('/:id', putPlatform);
router.delete('/:id', deletePlatform);
router.get('/', getPlatform);
router.post('/', postPlatform);

module.exports = router;

