import "./styles.scss";
import useVisibility from "../../hooks/useVisibility";
import dateFormatter from "../../utils/dateFormatter";
import DetailsModal from "../details_modal/detailsModal";



function UserReport(props) {
	const formattedDate = dateFormatter(props.date);
	const { showVisibility, visibility, hideVisiblity } = useVisibility();


	return (
		<div className="user_report">
			<p className="org">{props.organization}</p>
			<p className="lender_name">{props.name}</p>
			<p>{props.email}</p>
			<p className="tel">{props.tel}</p>
			<p>{formattedDate}</p>
			<div className="user_status">
				<p className={`status ${props.status}`}>{props.status}</p>
				<img onClick={showVisibility} src="/svg/more.svg" alt="more" />
				<DetailsModal visibility={visibility} hideVisiblity={hideVisiblity} />
			</div>
		</div>
	);
}
export default UserReport;
