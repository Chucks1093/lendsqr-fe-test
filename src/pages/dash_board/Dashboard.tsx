import TopNav from "../../components/top_nav/TopNav";
import SideNav from "../../components/side_nav/SideNav";
import { Outlet } from "react-router-dom";
import "./styles.scss";


function Dashboard() {
	return (
		<div id="dash_board" className="dash_board">
			<TopNav />
			<SideNav />	
			<div className="out_let">
				<Outlet />	
			</div>
		</div>
	);
}
export default Dashboard;
