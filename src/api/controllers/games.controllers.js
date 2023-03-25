const { deleteFile } = require("../../middleware/delete");
const Game = require("../models/games.model");

//GET
const getGame = async (req, res) => {
  try {
    let { page, limit } = req.query;
    const numGames = await Game.countDocuments();
    limit = limit ? parseInt(limit) :5;
    if (page && !isNaN(parseInt(page))) {
      page = parseInt(page);
      let numPages =
        numGames % limit > 0 ? numGames / limit + 1 : numGames / limit;

      if (page > numPages) page = numPages;

      if (page < 1) page = 1;

      const skip = (page - 1) * limit; 

      const games = await Game.find().skip(skip).limit(limit);
      return res.status(200).json({
        info: {
          numTotal: numGames,
          page: page,
          limit: limit,
          nextPage:
            numPages >= page + 1
              ? `/games?page=${page + 1}&limit=${limit}`
              : null,
          prevPage: page != 1 ? `/games?page=${page - 1}&limit=${limit}` : null,
        },
        results: games,
      });
    } else {
      const games = await Game.find().limit(limit);
      return res.status(200).json({
        info: {
          numTotal: numGames,
          page: 1,
          limit: limit,
          nextPage: numGames > limit ? `/games?page=2&limit=${limit}` : null,
          prevPage: null,
        },
        results: games,
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
//   limite
const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);

    !game
      ? res.status(404).json({ message: "Game not found." })
      : res.status(200).json(game);
  } catch (error) {
    res.status(500).json(error);
  }
};

//PUT
const putGame = async (req, res) => {
  console.log(req.file);
  try {
    const { id } = req.params;
    const putGame = new Game(req.body);
    putGame._id = id;

    if (req.file) {
      putGame.image = req.file.path;
    } 

    const updatedGame = await Game.findByIdAndUpdate(id, putGame);

    if (updatedGame.image){
      deleteFile(updatedGame.image);
    }

    return !updatedGame
      ? res.status(404).json({ message: "Game not found to be updated." })
      : res.status(200).json(updatedGame);

  } catch (error) {
    res.status(500).json(error);
  }
};

//POST
const postGame = async (req, res) => {
  try {
    const newGame = new Game(req.body);
    const createdGame = await newGame.save();

    newGame.image = req.file.path;

    return res.status(200).json(createdGame);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE
const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGame = await Game.findByIdAndDelete(id);

    !deletedGame
      ? res.status(404).json({ message: "Game not found to be deleted." })
      : res.status(200).json(deletedGame);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getGame, putGame, getGameById, postGame, deleteGame };
