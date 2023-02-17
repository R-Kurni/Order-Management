const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
	try {
		const { access_token } = req.headers;
		if (!access_token) {
			throw { name: "invalid_token" };
		}

		const payload = decodeToken(access_token);
		if (!payload) {
			console.log("masuk payload");
			throw { name: "invalid_token" };
		}

		const user = await User.findByPk(payload.id);
		if (!user) {
			console.log("masuk user");
			throw { name: "invalid_token" };
		}

		req.user = {
			id: user.id,
			email: user.email,
		};

		next();
	} catch (err) {
		next(err);
	}
};

module.exports = { authentication };
