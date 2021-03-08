const knex = require("../db/connection");

const getAllTheaters = () => knex("theaters").select("*");

module.exports = {
    getAllTheaters,
}