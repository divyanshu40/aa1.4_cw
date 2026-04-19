const express = require("express");
const cors= require("cors");
const { movie } = require("./models/movie.model");
const { initializeDatabase } = require("./db/db.connect");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

initializeDatabase().then(() => {
    console.log("Connected to MONGODB");
    app.listen(PORT, () => {
        console.log("Server is running on PORT ", PORT);
    })
});

// function to add new movie
async function addNewMovie(movieData) {
    const addedMovie = await new movie(movieData).save();
    return { addedMovie };
}

// Endpoint to add new movie
app.post("/movie/new", async (req, res) => {
    const movieData = req.body;
    try {
        let response = await addNewMovie;
        return res.status(201).json(response);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});