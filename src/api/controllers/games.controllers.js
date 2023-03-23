const Game = require('../models/games.model');

//GET
const getGame = async(req,res) => {
    try {

        const allGames = await Game.find();

        return res.status(200).json(allGames);

    } catch (error) {
        res.status(500).json(error)
    }
}

const getGameById = async(req,res) => {
    try {

        const { id } = req.params;
        const game = await Game.findById(id);

        !game ? res.status(404).json({"message": "Game not found."}) :  res.status(200).json(game);

    } catch (error) {
        res.status(500).json(error)
    }
}

//PUT
const putGame = async(req,res) => {
    try {

        const { id } = req.params;
        const putGame = new Game(req.body);
        putGame._id = id;
        const updatedGame = await Game.findByIdAndUpdate(id, putGame, {new: true});

        !updatedGame ? res.status(404).json({"message": "Game not found to be updated."}) :  res.status(200).json(updatedGame);
    } catch (error) {
        res.status(500).json(error)
    }
}

//POST
const postGame = async(req,res) => {
    try {

        const newGame = new Game(req.body);
        const createdGame = await newGame.save();

        return res.status(200).json(createdGame);

    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE
const deleteGame = async(req,res) => {
    try {
        const { id } = req.params;
        const deletedGame = await Game.findByIdAndDelete(id);

        !deletedGame ? res.status(404).json({"message": "Game not found to be deleted."}) :  res.status(200).json(deletedGame);

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getGame, putGame, getGameById, postGame, deleteGame};