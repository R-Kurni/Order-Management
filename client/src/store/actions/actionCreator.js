export const createUser = (userInput) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInput),
			});
			return res;
		} catch (error) {
			console.log(error);
		}
	};
};

export const loginUser = (userInput) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInput),
			});
			const data = await res.json();
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchOrdersSuccess = (data) => {
	return {
		type: "orders/fetchSuccess",
		payload: data,
	};
};

export const fetchOrders = () => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/orders");
			const data = await res.json();
			console.log(data);
			dispatch(fetchOrdersSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};
