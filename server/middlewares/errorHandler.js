const errorHandler = (err, req, res, next) => {
	let code = 500;
	let message = "Internal Server Error";

	if (err.name === "SequelizeValidationError") {
		let errMsg = err.errors.map((el) => el.message);
		code = 400;
		message = errMsg[0];
	} else if (err.name == "SequelizeUniqueConstraintError") {
		code = 400;
		message = "Email has already been used";
	}
	console.log(err);
	res.status(code).json({ message });
};

module.exports = errorHandler;
