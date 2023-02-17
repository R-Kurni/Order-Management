"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Order);
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					msg: "Email must be unique",
				},
				validate: {
					isEmail: {
						msg: "Invalid email format",
					},
					notNull: {
						msg: "Email is required",
					},
					notEmpty: {
						msg: "Email is required",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Password is required",
					},
					notEmpty: {
						msg: "Password is required",
					},
					len: {
						args: [6, 18],
						msg: "Password must be 6 - 18 characters",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	User.beforeCreate((user, option) => {
		user.password = hashPassword(user.password);
	});
	return User;
};
