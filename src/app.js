if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router");

// app.use(express.json());

app.use("/movies", moviesRouter);


// ERROR HANDLER
app.use((err, req, res, next) => {
    console.error(err);
    const { status = 500, message = "Something went wrong." } = err;
    res.status(status).json({errors: [message] }); 
});


module.exports = app;
