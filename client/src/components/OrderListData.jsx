export default function ParkingRowData({ order }) {
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};
	return (
		<>
			<tr>
				<td className="text-center">{order.id}</td>
				<td>{order.name}</td>
				<td className="text-center">{order.quantity}</td>
				<td className="text-center">{rupiah(order.price)}</td>
				<td className="text-center">{rupiah(order.totalPrice)}</td>
			</tr>
		</>
	);
}
