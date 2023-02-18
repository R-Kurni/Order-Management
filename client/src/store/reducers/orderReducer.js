const initialState = {
	orders: [],
};

function orderReducer(state = initialState, action) {
	switch (action.type) {
		case "orders/fetchSuccess":
			return {
				...state,
				orders: action.payload,
			};
		default:
			return state;
	}
}

export default orderReducer;
