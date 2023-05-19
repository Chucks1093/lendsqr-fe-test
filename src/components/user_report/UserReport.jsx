import "./styles.scss";
import useVisibility from "../../hooks/useVisibility";
import dateFormatter from "../../utils/dateFormatter";
import DetailsModal from "../details_modal/detailsModal";
import { useState } from "react";



function UserReport(props) {
	const formattedDate = dateFormatter(props.date);
	const { showVisibility, visibility } = useVisibility(props.id);

	const [index, setIndex] = useState(0);
	const handleClick = (e) => {
		// const lenderIndex = e.currentTarget.parentElement.parentElement;
		console.log(e.currentTarget.parentElement.parentElement.id);
		// localStorage.setItem("lenderIndex", JSON.stringify(lenderIndex))
	};


	return (
		<div  className="user_report">
			<p className="org">{props.organization}</p>
			<p className="lender_name">{props.name}</p>
			<p>{props.email}</p>
			<p className="tel">{props.tel}</p>
			<p>{formattedDate}</p>
			<div className="user_status">
				<p className={`status ${props.status}`}>{props.status}</p>
				<img id={props.id} className="more" onClick={showVisibility} src="/svg/more.svg" alt="more" />
				<DetailsModal id={props.id} visibility={visibility} />
			</div>
		</div>
	);
}
export default UserReport;
