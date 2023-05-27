import { Link } from "react-router-dom";
import "./styles.scss";
import getLocalStorage from "../../utils/localStorage";
import { useParams } from "react-router-dom";
import Section from "../../components/user_details_section/Section";
import addAPIData from "../../utils/userDetails";
import UserData from "../../types/UserData";
import { useEffect } from "react";

function UserDetails()  {
	const userData: UserData[] = getLocalStorage();
    let { userID } : { userID? : number}  = useParams();
	userID = (userID ?? 0) - 1;
	const profile = addAPIData(userData[userID])
	const {firstName, lastName} = userData[userID].profile;
	useEffect(()=>{
		const handleOutsideClick = (e: Event )=>{
			const sideBar = document.querySelector("#nav-bar") as HTMLElement;	
			const menubutton = document.querySelector("#menu-bar") as HTMLElement;
			const targetElement = e.target as Element;
			if (!sideBar.classList.contains("hide_bar") && !targetElement.closest("nav")) {
				sideBar.classList.add("hide_bar");

			}


			if (targetElement == menubutton) {
				console.log("show bar")
				sideBar.classList.remove("hide_bar");
				console.log(sideBar)
			}
		}
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);

	}, []);


	const activateUser =()=> {
		const userStatus = userData[(userID ?? 0)].status;
		userData[(userID ?? 0)].status = userStatus == "blacklisted" ? "active" : userStatus;
		localStorage.setItem("users", JSON.stringify(userData));
	};
	const blackListUser =()=> {
		const userStatus = userData[(userID ?? 0)].status;
		userData[(userID ?? 0)].status = userStatus == "active" ? "blacklisted" : userStatus;
		localStorage.setItem("users", JSON.stringify(userData));
	}
	

	return (
		<div className="user_details_page">
			<Link to="/dashboard" className="userpage_link">
				<img src="/svg/left_arrow.svg" alt="left_arrow" />
				<p>Back to Users</p>
			</Link>
			<div className="page_details">
				<h1 className="page_title">User Details</h1>
				<div className="btn_container">
					<button className="blacklist_btn" onClick={blackListUser}>BLACKLIST USER</button>
					<button className="activate_btn" onClick={activateUser}>ACTIVATE USER</button>
				</div>
			</div>
			<div className="user_details_id">
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
				<div className="profile_sections_container">
					<div className="profile_sections">
						<h3 className="active">General Details</h3>
						<h3>Document Details</h3>
						<h3>Bank Details</h3>
						<h3>Loans</h3>
						<h3>Savings</h3>
						<h3>Apps and Systems</h3>
					</div>

				</div>
			</div>
			<div className="user_info">
				<Section title="Personal Information" data={profile.personalInfo} />
				<Section title="Education and Employment" data={profile.education} />
				<Section title="Socials" data={profile.socials} />
				<Section title="Gurantor" data={profile.guarantor} />
			</div>
		</div>
	);
}
export default UserDetails;
