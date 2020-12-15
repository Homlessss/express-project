const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    SubName: {
        type: String,
        require: true
    },
    Status: {
        type: String,
        require: true
    },
    Director: {
        type: String,
        require: true
    },
    Casts: {
        type: String,
        require: true
    },
    Year: {
        type: Number,
        require: true
    },
    ReleaseDate: {
        type: Date,
        require: true
    },
    Time: {
        type: Number,
        require: true
    },
    Nation: {
        type: String,
        require: true
    },
    Quality: {
        type: String,
        require: true
    },
    Resolution: {
        type: String,
        require: true
    },
    Language: {
        type: String,
        rerquire: true
    },
    Category: {
        type: String,
        require: true
    },
    ManufacturingCompany: {
        type: String,
        require: true
    },
    Rate: {
        type: Float32Array,
        require: true
    },
    Content: {
        type: String,
        require: true
    },
    TrailerUrl: {
        type: String,
        require: true
    },
    Comments: {
        type: String,
        require: true
    },
    FilmUrl: {
        type: String,
        require: true
    }
});

const FilmModel = mongoose.model("Film", FilmSchema);

