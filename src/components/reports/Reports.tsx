import "./styles.scss";
import UserReport from "../user_report/UserReport";
import Sorter from "../sorter/Sorter";
import NoUser from "../no_user/NoUser";
import useVisibility from "../../hooks/useVisibility";
import UserData from "../../types/UserData";

const reportColumns = [
	"organization",
	"username",
	"email",
	"phone number",
	"date joined",
	"status",
] as const ;

function Reports({ shownLenders } : { shownLenders: UserData[] }) {
	const { visibility, showVisibility } = useVisibility("filter_img");
	return (
		<div className="reports_container">
			<div className="reports">
				<div className="reports_title">
					{reportColumns.map((column, i) => (
						<div key={i} className={`report_filter ${column}`}>
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
							username={lender.userName}
							email={lender.email}
							phoneNumber={lender.phoneNumber}
							date={lender.createdAt}
							status={lender.status}
							id={Number(lender.id)}
						/>
					))
				) : (
					<NoUser />
				)}
				{ visibility && <Sorter />}
			</div>
		</div>
	);
}
export default Reports;
