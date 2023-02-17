const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { encodeToken } = require("../helpers/jwt");

class userController {
	static async register(req, res, next) {
		try {
			const { email, password } = req.body;
			const newUser = await User.create({
				email,
				password,
			});
			res
				.status(201)
				.json({ message: `Email ${newUser.email} successfully created.` });
		} catch (error) {
			next(error);
		}
	}

	static async login(req, res, next) {
		try {
			res.status(200).json();
		} catch (error) {
			next(error);
		}
	}
}

module.exports = userController;
