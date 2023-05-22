import MenuOptions from "../menu_options/MenuOptions";
import "./styles.scss";
import { businesses, customers, settings } from "../../utils/navOptions";

function SideNav() {
	return (
		<nav className="nav">
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
				<MenuOptions name={"LogOut"} icon="log_out" />
			</div>
		</nav>
	);
}
export default SideNav;
