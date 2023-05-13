import { Fragment} from "react";
import { Link } from "react-router-dom";
import "./styles.scss";


function DetailsModal({ hideVisiblity, visibility }) {
	return (
		<Fragment>
			<div
				style={{ display: `${visibility ? "block" : "none"}` }}
				className="dash_board_cover"
				onClick={hideVisiblity}
			></div>
			<div
				style={{ display: `${visibility ? "block" : "none"}` }}
				className="details_modal"
			>
				<Link to="/dashboard/details">
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
		</Fragment>
	);
}
export default DetailsModal;
