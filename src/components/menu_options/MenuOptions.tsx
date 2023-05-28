import { NavLink } from "react-router-dom";
import "./styles.scss";
import { ReactElement } from "react";

type MenuOptionsProps = {
	name: string;
	icon: string;
	list?: boolean;
	link?: string;
}

function MenuOptions(props: MenuOptionsProps): ReactElement {
	return (
		<NavLink to={props.link? props.link : "/"} className={`menu_options ${({isActive}: {isActive: boolean})=> isActive ? "active" : ""}`}>
			<img
				className="icon"
				src={`/svg/${props.icon}.svg`}
				alt={props.name}
			/>
			<h4>{props.name}</h4>
			{props.list && (
				<img className="list" src="/svg/downarrow.svg" alt="" />
			)}
		</NavLink>
	);
}
export default MenuOptions;
