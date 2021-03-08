const router = require("express").Router();
const moviesController = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

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

router
    .route("/:movieId")
    .get(moviesController.read)
    .all(methodNotAllowed);

router
    .route("/")
    .get(moviesController.list)
    .all(methodNotAllowed);

module.exports = router;