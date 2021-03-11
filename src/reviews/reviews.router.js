const router = require('express').Router({ mergeParams: true });
const reviewsController = require('./reviews.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router
    .route('/:reviewId')
    .put(reviewsController.update)
    .delete(reviewsController.destroy)
    .all(methodNotAllowed);

router
    .route('/')
    .get(reviewsController.list)
    .all(methodNotAllowed);

module.exports = router;