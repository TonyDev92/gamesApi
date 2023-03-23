const Platform = require('../models/platform.model');

//GET 
const getPlatform = async (req, res) => {
    try
    {
        const allPlatforms = await Platform.find().populate("games");

        return res.status(200).json(allPlatforms);
    } 
    catch(error) 
    {
        res.status(500).json(error)
    }
}


const getPlatformById = async (req, res) => {
    try
    {
        const { id } = req.params;
        const platform = await Platform.findById(id).populate("games"); //Referencia al modelo Game Línea 19

        !platform ? res.status(404).json({'message': 'Platform not found.'}) : res.status(200).json(platform);
    } 
    catch(error) 
    {
        res.status(500).json(error)
    }
}

//PUT
const putPlatform = async (req, res) => {
    try
    {
        const { id } = req.params;
        const putPlatform = new Platform(req.body);
        putPlatform._id = id;

        const updatedPlatform = await Platform.findByIdAndUpdate(id, putPlatform,{$push:{games:gamesId}}, {new: true});

        !updatedPlatform ? res.status(404).json({'message': 'Platform not found to update.'}) : res.status(200).json(updatedPlatform);
    } 
    catch(error) 
    {
        res.status(500).json(error)
    }
}


const postPlatform = async (req, res) => {
    try
    {
        const newPlatform = new Platform(req.body);
        const createdPlatform = await newPlatform.save();

        return res.status(200).json(createdPlatform);
    } 
    catch(error) 
    {
        res.status(500).json(error)
    }
}


const deletePlatform = async (req, res) => {
    try
    {
        const { id } = req.params;
        const deletedPlatform = await Platform.findByIdAndDelete(id);

        !deletedPlatform ? res.status(404).json({'message': 'Platform not found to delete.'}) : res.status(200).json(deletedPlatform);
    } 
    catch(error) 
    {
        res.status(500).json(error)
    }
}

module.exports = {getPlatform, getPlatformById, putPlatform, postPlatform, deletePlatform};