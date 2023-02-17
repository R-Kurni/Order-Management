const { Order, User } = require("../models");

class orderController {
	static async createOrder(req, res, next) {
		try {
			await Order.create();
		} catch (error) {
			next(error);
		}
	}

	static async getOrders(req, res, next) {
		try {
			res.status(200).json();
		} catch (error) {
			next(error);
		}
	}
}

module.exports = orderController;
