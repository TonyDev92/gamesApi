const express = require('express');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');
const routerGames = require('./src/api/routes/games.routes');
const routerPlatforms = require('./src/api/routes/platform.routes');
const routerUser = require('./src/api/routes/user.routes');

dotenv.config();
const PORT = process.env.PORT || 5500;
const app = express();
connect()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/games', routerGames);
app.use('/platforms', routerPlatforms);
app.use('/user', routerUser);


app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));
