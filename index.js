const express = require('express');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');
const routerGames = require('./src/api/routes/games.routes');

dotenv.config();
const PORT = process.env.PORT || 5500;
const app = express();
connect()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/games', routerGames);



app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));
