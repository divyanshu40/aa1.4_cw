const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    duration: {
        type: Number
    },
    releaseYear: {
        type: Number
    },
    actor: {
        type: [String]
    },
    plot: {
        type: String
    }
}, {
    timestamps: true
});

const movie = mongoose.model("movie", movieSchema);

module.exports = { movie }