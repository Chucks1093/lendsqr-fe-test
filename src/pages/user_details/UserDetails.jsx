import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";


function UserDetails() {
	return (
		<Fragment>
			<Link to="/dashboard" className="userpage_link">
				<img src="/svg/left_arrow.svg" alt="left_arrow" />
				<p>Back to Users</p>
			</Link>
			<div className="page_details">
				<h1>User Details</h1>
				<div>
					<button className="blacklist_btn">BLACKLIST USER</button>
					<button className="activate_btn">ACTIVATE USER</button>
				</div>
			</div>
			<div className="user_details">
				<div className="user_profile">
					<div className="user_img">
						<img src="/svg/person.svg" alt="person" />
					</div>
					<div>
						<h3>Grace Effiom</h3>
						<span>LSQFf587g90</span>
					</div>
					<div>
						<p>User’s Tier</p>
						<div>
							<img src="/svg/filled_star.svg" alt="" />
							<img src="/svg/unfilled_star.svg" alt="" />
							<img src="/svg/unfilled_star.svg" alt="" />
						</div>
					</div>
					<div>
						<h4>₦200,000.00</h4>
						<p>9912345678/Providus Bank</p>
					</div>
				</div>
				<div className="profile_sections">
					<h3>General Deatails</h3>
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
