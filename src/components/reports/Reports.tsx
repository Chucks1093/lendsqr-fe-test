import "./styles.scss";
import UserReport from "../user_report/UserReport";
import Sorter from "../sorter/Sorter";
import NoUser from "../no_user/NoUser";
import useVisibility from "../../hooks/useVisibility";

function Reports({ shownLenders }) {
	const { visibility, showVisibility } = useVisibility("filter_img");
	const reportColumns = [
		"organization",
		"username",
		"email",
		"phone number",
		"date joined",
		"status",
	];
	return (
		<div className="reports">
			<div className="reports_title">
				{reportColumns.map((column, i) => (
					<div key={i} className="report_filter">
						<p>{column}</p>
						<img id="filter_img" onClick={showVisibility} src="/svg/filter.svg" alt={column} />
					</div>
				))}
			</div>
			{shownLenders.length ? (
				shownLenders.map((lender, i) => (
					<UserReport
						key={i}
						organization={lender.orgName}
						name={lender.userName}
						email={lender.email}
						tel={lender.phoneNumber}
						date={lender.createdAt}
						status={lender.status}
						id={lender.id}
					/>
				))
			) : (
				<NoUser />
			)}
			{ visibility && <Sorter />}
		</div>
	);
}
export default Reports;
