import { Fragment, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import "./styles.scss";
import getLocalStorage from "../../utils/localStorage";

function activateUser(e) {
	const allData = getLocalStorage();
	const id = e.currentTarget.parentElement.previousElementSibling.id -1;
	console.log(allData[id].status, "before")
	const userCurrentStatus = allData[id].status;
	allData[id].status = userCurrentStatus == "blacklisted"? "active" : userCurrentStatus;
	console.log(allData)
	console.log(allData[id].status, "after");
	localStorage.setItem("users", JSON.stringify(allData));
}

function blackListUser(e) {
	const allData = getLocalStorage();
	const id = e.currentTarget.parentElement.previousElementSibling.id - 1;
	console.log(allData[id].status, "before")
	const userCurrentStatus = allData[id].status;
	allData[id].status = userCurrentStatus == "active"? "blacklisted" : userCurrentStatus;
	console.log(allData)
	console.log(allData[id].status, "after")
	localStorage.setItem("users", JSON.stringify(allData));

}

function DetailsModal({ id }) {
	return (
		<div className="details_modal">
			<Link to={`/dashboard/details/${id}`}>
				<div>
					<img src="/svg/eye.svg" alt="eye_icon" />
					<p>View Details</p>
				</div>
			</Link>
			<div onClick={blackListUser}>
				<img src="/svg/blacklist_user.svg" alt="blacklist_users" />
				<p>Blacklist User</p>
			</div>
			<div onClick={activateUser}>
				<img src="/svg/activate_user.svg" alt="active_user" />
				<p>Activate User</p>
			</div>
		</div>
	);
}
export default DetailsModal;
