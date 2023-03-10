import { Container, Col, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../store/actions/actionCreator";
import OrderListData from "../components/OrderListData";
import AddOrderModal from "../components/AddOrderModal";

export default function HomePage() {
	const dispatch = useDispatch();
	const { orders } = useSelector((state) => {
		return state.orders;
	});
	useEffect(() => {
		dispatch(fetchOrders());
	}, []);
	return (
		<>
			<Container className="home-content">
				{orders.length < 1 ? (
					<div className="no-order">
						<Row>
							<div className="Title-Name">
								You don't have order list yet, don't worry...
							</div>
						</Row>
						<Row>
							<AddOrderModal />
						</Row>
					</div>
				) : (
					<div className="yes-order">
						<Row className="width-100">
							<Col lg={3}></Col>
							<Col lg={6}>
								<div className="Title-Name">ORDER LIST</div>
							</Col>
							<Col lg={3} className="add-btn">
								<Row>
									<AddOrderModal />
								</Row>
							</Col>
						</Row>
						<Row className="width-100">
							<Table bordered>
								<thead>
									<tr>
										<th className="col-1 text-center">Order ID</th>
										<th className="col-4 text-center">Product Name</th>
										<th className="col-1 text-center">Quantity</th>
										<th className="col-3 text-center">Price / Unit</th>
										<th className="col-3 text-center">Total Price</th>
									</tr>
								</thead>
								<tbody>
									{orders.map((order) => {
										return <OrderListData order={order} key={order.id} />;
									})}
								</tbody>
							</Table>
						</Row>
					</div>
				)}
			</Container>
		</>
	);
}
