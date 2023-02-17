"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Order.belongsTo(models.User);
		}
	}
	Order.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Name is required",
					},
					notNull: {
						msg: "Name is required",
					},
				},
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Quantity is required",
					},
					notNull: {
						msg: "Quantity is required",
					},
					min: {
						args: 1,
						msg: "Quantity minimum 1",
					},
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Price is required",
					},
					notNull: {
						msg: "Price is required",
					},
					min: {
						args: 9999,
						msg: "Price minimum Rp 9.999,00",
					},
				},
			},
			totalPrice: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Total Price is required",
					},
					notNull: {
						msg: "Total Price is required",
					},
					min: {
						args: 9999,
						msg: "Total Price minimum Rp 9.999,00",
					},
				},
			},
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "User ID is required",
					},
					notNull: {
						msg: "User ID is required",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Order",
		}
	);
	return Order;
};
