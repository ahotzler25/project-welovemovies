const MoviesService = require("./movies.service");


function movieExists(req, res, next) {
    const error = { status: 404, message: `Movie ID cannot be found.`}
    
    const { movieId } = req.params;
    if(!movieId) return next(error);

    MoviesService.getMovieById(movieId).then((movie) => {
        if(!movie) return next(error);
        res.locals.movie = movie;
        next();
    });
};


// Retrieves a list of all movies in "movies" table
function list(req, res, next) {
    MoviesService.getAllMovies()
        .then((movies) => {
            res.status(200).json({ data: movies})
        })
};

// Retrieves movie associated with id
function read(req, res, next) {
    const { movie } = res.locals;
    res.json({ data: movie })
}

module.exports = {
    list,
    read: [movieExists, read],
}