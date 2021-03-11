const ReviewsService = require('./reviews.service');
const treeize = require('../utils/treeize');


// VALIDATION MIDDLEWARE
async function reviewExists(req, res, next) {
    const error = { status: 404, message: 'Review cannot be found.' };
    const { reviewId } = req.params;

    if(!reviewId) return next(error);

    const review = await ReviewsService.read(reviewId);
    if (!review) return next(error);

    res.locals.review = review;
    next();
};

// PIPELINE
async function update(req, res, next) {
    const { reviewId } = req.params;
    const { review } = res.locals; // const review = res.locals.review;
    const { newData } = req.body; // const newData = req.body.data;
    let updatedReivew = { ...review };

    updatedReview = treeize(await ReviewsService.update(reviewId, newData));

    res.json({ data: updatedReview });
};

async function destroy(req, res, next) {
    const { reviewId } = req.params;
    await ReviewsService.destroy(reviewId);
    res.sendStatus(204);
};

async function list(req, res, next) {
    const { movie_id } = await res.locals.movie;
    let movieId = await ReviewsService.list(movie_id);
    movieId = treeize(movieId);
    res.json({ data: movieId }); 
};

module.exports = {
    update: [reviewExists, update],
    destroy: [reviewExists, destroy],
    list,
};