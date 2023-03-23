const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        date_release: {type: String, required: true},
        price: {type: Number, required: true},
        data_tech: [
            {ram: {type: String, required: true}}, 
            {memory: {type: String, required: true}},
            {}
        ]
    }
)