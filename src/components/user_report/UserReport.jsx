import "./styles.scss";

import { Link } from "react-router-dom";
import { useState } from "react";
import useVisibility from "../../hooks/useVisibility";
import dateFormatter from "../../utils/dateFormatter";

function UserReport(props) {
	const formattedDate = dateFormatter(props.date);
	const {visiblility, showVisibility} = useVisibility();

	return (
		<div className="user_report">
			<p>{props.organization}</p>
			<p className="lender_name">{props.name}</p>
			<p>{props.email}</p>
			<p className="tel">{props.tel}</p>
			<p>{formattedDate}</p>
			<div className="user_status">
				<p className="status">Inactive</p>
				<img onClick={showVisibility} src="/svg/more.svg" alt="more" />
				<div style={{display: `${visiblility? "block" : "none"}`}} className="details_modal">
                    <Link to="/dashboard/details">
						<div>
							<img src="/svg/eye.svg" alt="eye_icon" />
							<p>View Details</p>
						</div>
                    </Link>
					<div>
						<img
							src="/svg/blacklist_user.svg"
							alt="blacklist_users"
						/>
						<p>Blacklist User</p>
					</div>
					<div>
						<img src="/svg/activate_user.svg" alt="active_user" />
						<p>Activate User</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default UserReport;
