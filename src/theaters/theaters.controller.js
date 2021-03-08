const TheatersService = require("./theaters.service");

function list(req, res, next) {
    TheatersService.getAllTheaters()
        .then((theaters) => {
        res.status(200).json({ data: theaters })
    })
}

module.exports = {
    list,
}