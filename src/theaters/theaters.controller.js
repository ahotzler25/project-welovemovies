const TheatersService = require("./theaters.service");
const treeize = require('../utils/treeize');

async function list(req, res, next) {
    let list = await TheatersService.list();
    list = treeize(list);

    res.json({ data: list });
}

module.exports = {
    list,
}