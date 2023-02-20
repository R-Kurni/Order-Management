import { Form, Modal, Row, Col, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../store/actions/actionCreator";

export default function AddOrderModal() {
	const dispatch = useDispatch();
	const [validationAddOrder, setValidationAddOrder] = useState("");
	const [show, setShow] = useState(false);
	const [formOrder, setFormOrder] = useState({
		name: "",
		quantity: 0,
		price: 0,
	});
	const handleFormOrder = (e) => {
		const { value, name } = e.target;
		setFormOrder({
			...formOrder,
			[name]: value,
		});
	};

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = (e) => {
		e.preventDefault();
		setShow(true);
	};

	const submitAddOrderHandler = (e) => {
		e.preventDefault();
		dispatch(createOrder(formOrder)).then((data) => {
			if (
				data.message === "Name is required" ||
				data.message === "Quantity is required" ||
				data.message === "Price is required" ||
				data.message === "Quantity minimum 1" ||
				data.message === "Price minimum Rp 9.999,00"
			) {
				setValidationAddOrder(`${data.message}`);
			} else {
				setShow(false);
				setFormOrder("");
			}
		});
	};
	return (
		<>
			<div className="center">
				<button className="BTN" type="submit" onClick={handleShow}>
					+ Create New Order
				</button>
			</div>
			<Modal
				show={show}
				onHide={handleClose}
				animation={false}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Form onSubmit={submitAddOrderHandler} className="modal-container">
					<Modal.Header closeButton>
						<div className="Title-Name">Create New Order</div>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Form.Group className="mb-3">
								<Form.Label className="text-center">Product Name</Form.Label>

								<Form.Control
									type="text"
									className="form-control"
									name="name"
									placeholder="Enter product name ..."
									value={formOrder.name}
									onChange={handleFormOrder}
								/>
							</Form.Group>
						</Row>

						<Row>
							<Col lg={4}>
								<Form.Group className="mb-3">
									<Form.Label className="text-center">Quantity</Form.Label>

									<Form.Control
										type="number"
										className="form-control"
										name="quantity"
										placeholder="Input quantity ..."
										value={formOrder.quantity}
										onChange={handleFormOrder}
									/>
								</Form.Group>
							</Col>

							<Col lg={8}>
								<Form.Group className="mb-3">
									<Form.Label>Price / Unit</Form.Label>

									<InputGroup className="mb-3">
										<InputGroup.Text>Rp</InputGroup.Text>
										<Form.Control
											type="text"
											className="form-control"
											name="price"
											placeholder="Enter price ..."
											value={formOrder.price}
											onChange={handleFormOrder}
										/>
										<InputGroup.Text>.00</InputGroup.Text>
									</InputGroup>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							{validationAddOrder ? (
								<div className="validation-text">{validationAddOrder}*</div>
							) : (
								<div className="validation-text"> </div>
							)}
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<div className="center">
							<button className="BTN" type="submit">
								+ Create New Order
							</button>
						</div>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
}
