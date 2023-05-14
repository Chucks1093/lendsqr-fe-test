import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import getLocalStorage from "../../utils/localStorage";

function UserDetails(props) {
	let [userData] = getLocalStorage();
	userData = userData[1];
	console.log(userData)
	
	return (
		<Fragment>
			<Link to="/dashboard" className="userpage_link">
				<img src="/svg/left_arrow.svg" alt="left_arrow" />
				<p>Back to Users</p>
			</Link>
			<div className="page_details">
				<h1 className="page_title">User Details</h1>
				<div>
					<button className="blacklist_btn">BLACKLIST USER</button>
					<button className="activate_btn">ACTIVATE USER</button>
				</div>
			</div>
			<div className="user_details">
				<div className="user_profile">
					<div className="user_img">
						<img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg" alt="person" />
					</div>
					<div className="user_id">
						<h3>Grace Effiom</h3>
						<span>LSQFf587g90</span>
					</div>
					<div className="user_tier">
						<p>User’s Tier</p>
						<div>
							<img className="star" src="/svg/filled_star.svg" alt="" />
							<img className="star middle"  src="/svg/unfilled_star.svg" alt="" />
							<img className="star"  src="/svg/unfilled_star.svg" alt="" />
						</div>
					</div>
					<div className="user_finance">
						<h4>₦200,000.00</h4>
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
				<div>
					<h3>Pesonal Information</h3>
					<div className="info">
						<p className="top">FULL NAME</p>
						<p className="bottom">Grace Effiom</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
				</div>
				<div>
					<h3>Pesonal Information</h3>
					<div className="info">
						<p className="top">FULL NAME</p>
						<p className="bottom">Grace Effiom</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
				</div>
				<div>
					<h3>Pesonal Information</h3>
					<div className="info">
						<p className="top">FULL NAME</p>
						<p className="bottom">Grace Effiom</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
				</div>
				<div>
					<h3>Pesonal Information</h3>
					<div className="info">
						<p className="top">FULL NAME</p>
						<p className="bottom">Grace Effiom</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
					<div className="info">
						<p className="top">Phone Number</p>
						<p className="bottom">07060780922</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
export default UserDetails;
