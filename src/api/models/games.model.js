const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema(
    {
        title: {type:String , required: true},
        genre: [{type:String , required: true}],
        short_description: {type: String, required: true},
        release_date: {type:String , required: true},
        playedInPlatform: [{type: String, required: true}],
        publisher: {type:String, required:true},   
        image: {type:String , required: false, default: 'https://res.cloudinary.com/ddvwcbpa5/image/upload/v1679673312/Games/photogeneric_z3drsc.jpg'}
        
    },{
        timestamps:true
    }
)

const Game = mongoose.model('games', gameSchema);
module.exports = Game;
