import "./styles.scss";
import useVisibility from "../../hooks/useVisibility";
import dateFormatter from "../../utils/dateFormatter";
import DetailsModal from "../user_modal/detailsModal";

type UserReportProps = {
	organization: string;
	username: string;
	email: string;
	phoneNumber: string;
	date: string;
	status: "active" | "inactive" | "blacklisted" | "pending";
	id: number;
};

function UserReport(props: UserReportProps) {
	const formattedDate = dateFormatter(props.date);
	const { showVisibility, visibility } = useVisibility(props.id);


	return (
		<div  className="user_report">
			<p className="org">{props.organization}</p>
			<p className="lender_name">{props.username}</p>
			<p>{props.email}</p>
			<p className="tel">{props.phoneNumber}</p>
			<p>{formattedDate}</p>
			<div className="user_status">
				<p className={`status ${props.status}`}>{props.status}</p>
				<img onClick={showVisibility} id={`${props.id}`} className="more" src="/svg/more.svg" alt="more" />
				{ visibility && <DetailsModal id={props.id} />}
			</div>
		</div>
	);
}
export default UserReport;
