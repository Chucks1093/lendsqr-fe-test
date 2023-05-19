import "./styles.scss";
import Analytics from "../../components/analytics/Analytics";
import Reports from "../../components/reports/Reports";
import { Fragment, useState } from "react";
import useLenders from "../../hooks/useLenders";
import StatusContext from "../../context/StatusContext";

function UserPage() {
	const { lenders, showNextLenders, showPrevLenders, setUserStatus } =useLenders();

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
			<StatusContext.Provider value={{ setUserStatus }}>
				<Reports lenders={lenders} />
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
					<p>out of 100</p>
				</div>
				<div className="more_users">
					<button onClick={showPrevLenders}>
						<img src="/svg/arrow_left.svg" alt="" />
					</button>
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>
						<img src="/svg/show_less.svg" alt="" />
					</span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<button onClick={showNextLenders}>
						<img src="/svg/arrow_right.svg" alt="" />
					</button>
				</div>
			</div>
		</Fragment>
	);
}
export default UserPage;
