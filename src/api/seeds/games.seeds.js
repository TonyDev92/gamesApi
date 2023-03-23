const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Game = require("../models/games.model");
const DB_URL = process.env.DB_URL;
const arrayGames = [
  {
    title: "The Last of Us II",
    genre: ["Action-Adventure", "Terror"],
    short_description:
      "Two playable characters in a post-apocalyptic United States whose lives intertwine.",
    release_date: "2020-06-14",
    playedInPlatform: ["PS5", "Xbox Series X"],
    publisher: "Sony Interactive Entertainment",
    developer: "Naughty Dog",
    image:
      "https://res.cloudinary.com/dimadmepo/image/upload/v1679583259/Proyecto%20final%20node/assets/TheLastOfus_qdhhgk.png",
  },
  {
    title: "God of war",
    genre: ["Action-Adventure"],
    short_description:
      "In God of War, players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war. As the story progresses, Kratos is revealed to be Ares' former servant, who had been tricked into killing his own family and is haunted by terrible nightmares.      ",
    release_date: "2019-10-04",
    playedInPlatform: ["PS5", "Xbox Series X", "PC"],
    publisher: "Sony computer entertainment",
    developer: "Santa Monica",
    image:
      "https://res.cloudinary.com/dimadmepo/image/upload/v1679583252/Proyecto%20final%20node/assets/God_of_war_alternative_q8psou.png",
  },
  {
    title: "The Sims 4",
    genre: ["Simulation"],
    short_description:
      "Create and dress characters, build and furnish houses for them, and simulate their everyday lives",
    release_date: "2014-05-09",
    playedInPlatform: ["PS5", "Xbox Series X", "PC"],
    publisher: "Electronic Arts",
    developer: "Maxis",
    image:
      "https://res.cloudinary.com/dimadmepo/image/upload/v1679583259/Proyecto%20final%20node/assets/TheSims4_alternative_qqwf7j.png",
  },
  {
    title: "Overwatch 2",
    genre: ["Shooter"],
    short_description:
      "A hero-focused first-person team shooter from Blizzard Entertainment.",
    release_date: "2022-10-04",
    playedInPlatform: ["PS5", "Xbox Series X"],
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    image:
      "https://res.cloudinary.com/dimadmepo/image/upload/v1679583243/Proyecto%20final%20node/assets/Overwatch2_udnqaq.png",
  },
  {
    title: "Oxide Room",
    genre: ["Action-Adventure", "Terror"],
    short_description:
      "A bone-chilling body-horror game with escape room gameplay. Bad decisions have brought Matthew to this terrifying motel.",
    release_date: "2022-10-04",
    playedInPlatform: ["PS5", "Xbox Series X", "PC"],
    developer: "Wild Sphere",
    publisher: " Wild Sphere, Perpetual Europe",
    image:
      "https://res.cloudinary.com/dimadmepo/image/upload/v1679583255/Proyecto%20final%20node/assets/OxideRoom104_rvxzwe.png",
  },
  {
    title: "Resident Evil Village",
    genre: ["Action-Adventure", "Shooter", "Terror"],
    short_description:
      "Ethan Winters' wife & daughter are kidnapped, fight against various monsters such as Vampires, Lycans, Wolves, Witches, Fishmen, Dolls, Zombies & industrial abominations in order to save his family from the evil Mother Miranda. ",
    release_date: "2021-05-3",
    playedInPlatform: ["Xbox Series X", "PC", "PS5", "PS4", "PS5", "Xbox One"],
    publisher: "Capcom",
    developer: "Capcom",
    image: "https://res.cloudinary.com/dimadmepo/image/upload/v1679583256/Proyecto%20final%20node/assets/ResidentEvilVillage_yqrtsa.png",
  },
];

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allGames = await Game.find();
    if (allGames.length > 0) {
      await Game.collection.drop();
      console.log("Games now deleted");
    }
  })
  .catch((err) => console.log("error deleting games", err))
  .then(async () => {
    const gamesMap = arrayGames.map((game) => new Game(game));
    await Game.insertMany(gamesMap);
    console.log("Games inserted correctly");
  })
  .catch((err) => console.log("Error inserting games", err))
  .finally(() => mongoose.disconnect());
