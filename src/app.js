if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

// ERROR HANDLER
app.use((err, req, res, next) => {
    console.error(err);
    const { status = 500, message = "Something went wrong." } = err;
    /* Does errors: message need to be an array? Only one error message 
    should get sent back at any given time. */
    res.status(status).json({errors: [message] }); 
});


module.exports = app;
