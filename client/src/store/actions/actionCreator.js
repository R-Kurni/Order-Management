import axios from "axios";

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
			const { data } = await axios({
				method: "GET",
				url: `http://localhost:3000/orders`,
				headers: {
					access_token: localStorage.access_token,
				},
			});
			dispatch(fetchOrdersSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const createOrder = (formOrder) => {
	return async (dispatch) => {
		try {
			const res = await fetch("http://localhost:3000/orders", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					access_token: localStorage.access_token,
				},
				body: JSON.stringify(formOrder),
			});
			const data = await res.json();
			await dispatch(fetchOrders());
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};
