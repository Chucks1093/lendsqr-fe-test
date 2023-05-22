import {useContext} from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import StatusContext from "../../context/StatusContext";
import activateUser from "../../utils/activateUser";
import blackListUser from "../../utils/blackListUser";


function DetailsModal({ id }) {
	const { setUserStatus , setLenders } = useContext(StatusContext);
	return (
		<div id="details_modal" className="details_modal">
			<Link to={`/dashboard/details/${id}`}>
				<div>
					<img src="/svg/eye.svg" alt="eye_icon" />
					<p>View Details</p>
				</div>
			</Link>
			<div onClick={(e)=>blackListUser(setUserStatus,setLenders, e)}>
				<img src="/svg/blacklist_user.svg" alt="blacklist_users" />
				<p>Blacklist User</p>
			</div>
			<div onClick={(e)=>activateUser(setUserStatus,setLenders, e)}>
				<img src="/svg/activate_user.svg" alt="active_user" />
				<p>Activate User</p>
			</div>
		</div>	
	);
}
export default DetailsModal;
