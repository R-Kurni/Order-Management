export const register = (formRegister) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formRegister),
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const login = (formLogin) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formLogin),
			});
			const data = await res.json();
			if (data.access_token) {
				localStorage.setItem("access_token", data.access_token);
			}
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
