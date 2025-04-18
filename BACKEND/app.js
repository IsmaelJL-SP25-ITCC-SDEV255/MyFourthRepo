const express = require("express")

var cors = require('cors')

const app = express()

app.use(cors())

const router = express.Router()


// making an api using routes

router.get("/songs", function(req, res){
    const songs = [
     {
     title: "We Found lOve",
     artist: "Rihanna",
     popularity: 10,
     releaseDate: new Date("2011, 9, 22"),
        genre: ["electro house"],
    },
    {
     title: "Happy",
     artist: "Pharell Williams",
     popularity: 9,
     releaseDate: new Date("2013, 11, 21"),
        genre: ["soul", "new soul"],
    }
];
    res.json(songs)
})

//all request that usually use an api start with /api... so that url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)