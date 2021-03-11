const MoviesService = require("./movies.service");
const treeize = require('../utils/treeize'); // import treeize package


// VALIDATION MIDDLEWARE; EXPORT AT BOTTOM
async function movieExists(req, res, next) {
    const error = { status: 404, message: `Movie ID cannot be found.`};
    
    const { movieId } = req.params;
    if (!movieId) return next(error);

    const movie = await MoviesService.read(movieId);
    if (!movie) return next(error);
    
    res.locals.movie = movie;
    next();
    
};


// Retrieves a list of all movies in "movies" table
async function list(req, res, next) {
    const { is_showing } = req.query;

    let list = await MoviesService.list();
    list = treeize(list);

    let showingList = await MoviesService.isShowing();
    showingList = treeize(showingList);

    if (is_showing !== true) {
        res.json({ data: list });
    } else {
        res.json({ data: showingList });
    };
};


// Retrieves movie associated with id
function read(req, res, next) {
    const { movie } = res.locals;
    res.json({ data: movie })
};

module.exports = {
    list,
    read: [movieExists, read],
    movieExists,
};