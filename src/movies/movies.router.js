const router = require("express").Router();
const moviesController = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const reviewsRouter = require('../reviews/reviews.router');
const theatersRouter = require('../theaters/theaters.router');

/* TODO
- `GET /movies
// ADD reviews for each movie
// ADD route for /movies?is_showing=true (query)
//
// Four route cases for read:
- `GET /movies/:movieId`
- `GET /movies/:movieId` (incorrect ID)
- `GET /movies/:movieId/theaters`
- `GET /movies/:movieId/reviews`
*/

router.use("/:movieId/reviews", moviesController.movieExists, reviewsRouter);
router.use("/:movieId/theaters", moviesController.movieExists, theatersRouter);

router
    .route("/:movieId")
    .get(moviesController.read)
    .all(methodNotAllowed);

router
    .route("/")
    .get(moviesController.list)
    .all(methodNotAllowed);

module.exports = router;