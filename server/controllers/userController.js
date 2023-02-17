const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { encodeToken } = require("../helpers/jwt");

class userController {
	static async register(req, res, next) {
		try {
			res.status(201).json();
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
