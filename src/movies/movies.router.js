const router = require("express").Router();
const moviesController = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/")
    .get(moviesController.list)
    .all(methodNotAllowed);

module.exports = router;