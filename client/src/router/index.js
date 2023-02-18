import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import LoginRegister from "../views/LoginRegister.jsx";
import HomePage from "../views/HomePage.jsx";

const loginRequiredLoader = () => {
	if (localStorage.getItem("access_token")) {
		return redirect("/sign-in");
	}
};

const router = createBrowserRouter([
	{
		path: "/sign-in",
		element: <LoginRegister />,
	},
	{
		element: <Layout />,
		loader: loginRequiredLoader,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},
]);

export default router;
