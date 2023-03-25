const express = require('express');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const {connect} = require('./src/utils/database');
const routerGames = require('./src/api/routes/games.routes');
const routerPlatforms = require('./src/api/routes/platform.routes');
const routerUser = require('./src/api/routes/user.routes');

dotenv.config();
const PORT = process.env.PORT || 5500;
const app = express();
connect();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:4200", "http://localhost:5000", "http://localhost:5500", "https://gamesapi.vercel.app/"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/games', routerGames);
app.use('/platforms', routerPlatforms);
app.use('/user', routerUser);

app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));
