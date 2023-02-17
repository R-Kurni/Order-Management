const { Order } = require("../models");

class orderController {
	static async createOrder(req, res, next) {
		try {
			const { id } = req.user;
			const { name, quantity, price } = req.body;
			const product = await Order.create({
				name,
				quantity,
				price,
				totalPrice: quantity * price,
				UserId: id,
			});
			res.status(201).json(product);
		} catch (error) {
			next(error);
		}
	}

	static async getOrders(req, res, next) {
		try {
			const { id } = req.user;
			const orders = await Order.findAll({
				where: { UserId: id },
				order: [["id", "DESC"]],
			});
			res.status(200).json(orders);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = orderController;
