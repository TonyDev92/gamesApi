const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema(
    {
        title: {type:String , required: true},
        genre: {type:String , required: true},
        short_description: {type: String, required: true},
        releaseDate: {type:String , required: true},
        developer: {type:String, required: true},
        publisher: {type:String, required:true},   
        image: {type:String , required: false}
        
    },{
        timestamps:true
    }
)

const Game = mongoose.model('game', gameSchema);
module.exports = Game;
