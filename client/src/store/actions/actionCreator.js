import axios from "axios";

export const register = (formRegister) => {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "POST",
				url: `http://localhost:3000/register`,
				data: formRegister,
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	};
};

export const login = (formLogin) => {
	return async (dispatch) => {
		try {
			const { data } = await axios({
				method: "POST",
				url: `http://localhost:3000/login`,
				data: formLogin,
			});
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
