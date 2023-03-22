const Game = require('../models/games.model');


const getGame = async(req,res) => {
    try {
        return res.status(200).json('Soy el get');
    } catch (error) {
        res.status(500).json(error)
    }
}
const getGameById = async(req,res) => {
    try {
        return res.status(200).json('Soy el getId');
    } catch (error) {
        res.status(500).json(error)
    }
}
const putGame = async(req,res) => {
    try {
        return res.status(200).json('Soy el put');
    } catch (error) {
        res.status(500).json(error)
    }
}

const postGame = async(req,res) => {
    try {
        return res.status(200).json('Soy el post');
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteGame = async(req,res) => {
    try {
        return res.status(200).json('Soy el delete');
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getGame, putGame, getGameById, postGame, deleteGame};