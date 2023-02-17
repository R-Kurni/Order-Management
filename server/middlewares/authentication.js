const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
	try {
		next();
	} catch (err) {
		next(err);
	}
};

module.exports = { authentication };
