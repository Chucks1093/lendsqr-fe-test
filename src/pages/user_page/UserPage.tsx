import "./styles.scss";
import Analytics from "../../components/analytics/Analytics";
import Reports from "../../components/reports/Reports";
import { Fragment } from "react";
import useLenders from "../../hooks/useLenders";
import StatusContext from "../../context/StatusContext";


function UserPage() {
	const {
		lenders,
		setLenders,
		showFirstLenders,
		showNextLenders,
		showPrevLenders,
		updateUserStatus
	} = useLenders();
	const dataBatch = Math.floor(lenders.data.length / 10);
	const newArr = new Array(dataBatch)
		.fill("#")
		.map((ele, i) => ele = i + 1);
	console.log(newArr);
	return (
		<Fragment>
			<h1 className="page_title">Users</h1>
			<div className="analytics_container">
				<Analytics
					image="allusers"
					title={"USERS"}
					metrics={"2,453"}
					color={"rgba(223, 24, 255, 0.1)"}
				/>
				<Analytics
					color={"rgb(87, 24, 255, 0.1)"}
					image="activeusers"
					title={"ACTIVE USERS"}
					metrics={"2,453"}
				/>
				<Analytics
					color={"rgb(245, 95, 68, 0.1)"}
					image={"loans_user"}
					title={"USERS WITH LOAN"}
					metrics={"2,543"}
				/>
				<Analytics
					color={"rgb(255, 51, 102, 0.1)"}
					image={"savings_user"}
					title={"USERS WITH SAVINGS"}
					metrics={"102,453"}
				/>
			</div>
			<StatusContext.Provider
				value={{ updateUserStatus, showFirstLenders, setLenders }}
			>
				<Reports shownLenders={lenders.shownData} />
			</StatusContext.Provider>
			<div className="user_options">
				<div className="show_users">
					<p>Showing</p>
					<select name="" id="">
						<option value="">2</option>
						<option value="">2</option>
						<option value="">222</option>
						<option value="">22wf</option>
					</select>
					<p>{`out of ${lenders.data.length}`}</p>
				</div>
				<div className="more_users">
					<button onClick={showPrevLenders}>
						<img src="/svg/arrow_left.svg" alt="" />
					</button>
					

					<button onClick={showNextLenders}>
						<img src="/svg/arrow_right.svg" alt="" />
					</button>
				</div>
			</div>
		</Fragment>
	);
}
export default UserPage;
