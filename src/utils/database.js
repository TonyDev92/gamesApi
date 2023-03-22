const mongoose = require('mongoose');

const connect = async () => {

    try {
        
        const db = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Connected to ${name} DB in host: ${host}`)
        
    } catch (error) {
        console.log(`Found error to conect BBDD: ${error}`)
    }

}

module.exports = {connect}