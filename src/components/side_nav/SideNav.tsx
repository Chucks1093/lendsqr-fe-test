import MenuOptions from "../menu_options/MenuOptions";
import UserInfo from "../user_info/UserInfo";
import "./styles.scss";
import { businesses, customers, settings } from "../../utils/navOptions";


function SideNav() {
	return (
		<nav className="nav" id="nav-bar">
			<UserInfo />

			<MenuOptions name={"Swich Organization"} icon="briefcase" list />
			<MenuOptions name={"Dashboard"} icon="home" />
			<div>
				<h3>CUSTOMERS</h3>
				{customers.map((option, i) => (
					<MenuOptions
						key={i}
						name={option.name}
						icon={option.icon}
					/>
				))}
			</div>
			<div>
				<h3>BUSINESSES</h3>
				{businesses.map((option, i) => (
					<MenuOptions
						key={i}
						name={option.name}
						icon={option.icon}
					/>
				))}
			</div>
			<div>
				<h3>SETTINGS</h3>
				{settings.map((option, i) => (
					<MenuOptions
						key={i}
						name={option.name}
						icon={option.icon}
					/>
				))}
			</div>
			<div className="log_out">
				<div>
					<MenuOptions name={"LogOut"} icon="log_out" />
				</div>
				<img className="bell"  src="/svg/bell.svg" alt="" />
			</div>
			<span className="version_number">v1.2.0</span>
		</nav>
	);
}
export default SideNav;
