import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};
	return (
		<>
			<Navbar className="NavBar-BG" sticky="top">
				<Container className="NavBar">
					<div>
						<Link to="/" className="nav-link">
							<b className="nav-text">ORDER MANAGEMENT</b>
						</Link>
					</div>
					<div>
						<Nav
							style={{
								gap: "50px",
								alignItems: "center",
							}}
						>
							<Link to="/" className="nav-link">
								<div className="nav-text">ORDER LIST</div>
							</Link>
							<Link to="/login" className="nav-link" onClick={handleLogout}>
								<div className="nav-logout">
									<div className="nav-text">LOGOUT</div>
									<FontAwesomeIcon
										icon={faRightFromBracket}
										className="nav-text"
									/>
								</div>
							</Link>
						</Nav>
					</div>
				</Container>
			</Navbar>
		</>
	);
}
