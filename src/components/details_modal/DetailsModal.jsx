import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function DetailsModal({ visibility, id }) {
	const [index, setIndex] = useState(0);

	return (
		<div
			style={{ display: `${visibility ? "block" : "none"}` }}
			className="details_modal"
		>
			<Link to={`/dashboard/details/${id}`}>
				<div>
					<img src="/svg/eye.svg" alt="eye_icon" />
					<p>View Details</p>
				</div>
			</Link>
			<div>
				<img src="/svg/blacklist_user.svg" alt="blacklist_users" />
				<p>Blacklist User</p>
			</div>
			<div>
				<img src="/svg/activate_user.svg" alt="active_user" />
				<p>Activate User</p>
			</div>
		</div>
	);
}
export default DetailsModal;
