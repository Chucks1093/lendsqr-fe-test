import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/user_page/UserPage";
import Dashboard from "./pages/dash_board/Dashboard";
import SignIn from "./pages/login/SignIn";
import UserDetails from "./pages/user_details/UserDetails";
import "./App.scss";



function App() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/"  element={<SignIn />}></Route>
				<Route path="/dashboard" element={<Dashboard />}>
					<Route index element={<UserPage />} />
					<Route path="details" element={<UserDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
