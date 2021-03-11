const knex = require("../db/connection");

const getAllMovies = () => knex("movies").select("*");

const getMovieById = (movieId) => 
    knex("movies")
    .select("*")
    .where({ id: movieId })
    .first();

module.exports = {
    getAllMovies,
    getMovieById,
}