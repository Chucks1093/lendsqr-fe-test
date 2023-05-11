import "./styles.scss";
import Analytics from "../../components/analytics/Analytics";
import Reports from "../../components/reports/Reports";
import { Fragment } from "react";
import useLenders from "../../hooks/useLenders";


function UserPage() {
	const { lenders, showNextLenders, showPrevLenders } = useLenders();
	return (
		<Fragment>
			<h1>Users</h1>
			<div className="analytics_container">
				<Analytics title={"USERS"} metrics={"2,453"} />
				<Analytics title={"USERS"} metrics={"2,453"} />
				<Analytics title={"USERS"} metrics={"2,543"} />
				<Analytics title={"USERS"} metrics={"102,453"} />
			</div>
			<Reports lenders={lenders} />
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
					<button onClick={showPrevLenders}><img src="/svg/arrow_left.svg" alt="" /></button>
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span><img src="/svg/show_less.svg" alt="" /></span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<button onClick={showNextLenders}><img src="/svg/arrow_right.svg" alt="" /></button>
				</div>
			</div>
		</Fragment>
	);
}
export default UserPage;
