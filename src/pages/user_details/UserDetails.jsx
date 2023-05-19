import { Fragment, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import getLocalStorage from "../../utils/localStorage";
import { useParams } from "react-router-dom";
import Section from "../../components/user_details_section/Section";
import addAPIData from "../../utils/userDetails";

function UserDetails(props) {
	let userData = getLocalStorage();
    let { userID }= useParams();
	userID = userID - 1;
	const profile = addAPIData(userData[userID])
	const {firstName, lastName} = userData[userID].profile;
	const activateUser =()=> {
		const userStatus = userData[userID].status;
		userData[userID].status = userStatus == "blacklisted" ? "active" : userStatus;
		localStorage.setItem("users", JSON.stringify(userData));
	};
	const blackListUser =() => {
		const userStatus = userData[userID].status;
		userData[userID].status = userStatus == "active" ? "blacklisted" : userStatus;
		localStorage.setItem("users", JSON.stringify(userData));
	}
	

	return (
		<Fragment>
			<Link to="/dashboard" className="userpage_link">
				<img src="/svg/left_arrow.svg" alt="left_arrow" />
				<p>Back to Users</p>
			</Link>
			<div className="page_details">
				<h1 className="page_title">User Details</h1>
				<div>
					<button className="blacklist_btn" onClick={blackListUser}>BLACKLIST USER</button>
					<button className="activate_btn" onClick={activateUser}>ACTIVATE USER</button>
				</div>
			</div>
			<div className="user_details">
				<div className="user_profile">
					<div className="user_img">
						<img
							src={userData[userID].profile.avatar}
							alt="person"
						/>
					</div>
					<div className="user_id">
						<h3>{`${lastName} ${firstName}`}</h3>
						<span>{userData[userID].accountNumber}</span>
					</div>
					<div className="user_tier">
						<p>User’s Tier</p>
						<div>
							<img
								className="star"
								src="/svg/filled_star.svg"
								alt=""
							/>
							<img
								className="star middle"
								src="/svg/unfilled_star.svg"
								alt=""
							/>
							<img
								className="star"
								src="/svg/unfilled_star.svg"
								alt=""
							/>
						</div>
					</div>
					<div className="user_finance">
						<h4>{`₦${userData[userID].accountBalance}`}</h4>
						<p>9912345678/Providus Bank</p>
					</div>
				</div>
				<div className="profile_sections">
					<h3 className="active">General Deatails</h3>
					<h3>Document Details</h3>
					<h3>Bank Deatails</h3>
					<h3>Loans</h3>
					<h3>Savings</h3>
					<h3>Apps and Systems</h3>
				</div>
			</div>
			<div className="user_info">
				<Section title="Personal Information" data={profile.personalInfo} />
				<Section title="Education and Employment" data={profile.education} />
				<Section title="Socials" data={profile.socials} />
				<Section title="Gurantor" data={profile.guarantor} />
			</div>
		</Fragment>
	);
}
export default UserDetails;
