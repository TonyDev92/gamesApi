const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const platformSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        date_release: {type: String, required: true},
        price: {type: String, required: true},
        data_tech: [{
            ram: {type: String, required: true}, 
            memory: {type: String, required: true},
            resolution: {type: String, required: true}
        }],
        games: [{type: mongoose.Types.ObjectId, ref: 'games'}]
    },{
        timestamps:true
    }
)

const Platform = mongoose.model('platform', platformSchema);
module.exports = Platform;



