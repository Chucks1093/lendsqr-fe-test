import "./styles.scss";
import UserReport from "../user_report/UserReport";
import Sorter from "../sorter/Sorter";
import useLenders from "../../hooks/useLenders";

function Reports({lenders}) {	
	
	return (
		<div className="reports">
			<div className="reports_title">
				<div className="report_filter">
					<p>ORGANIZATION</p>
					<img src="/svg/filter.svg" alt="organization" />
				</div>
				<div className="report_filter">
					<p>USERNAME</p>
					<img src="/svg/filter.svg" alt="organization" />
				</div>
				<div className="report_filter">
					<p>EMAIL</p>
					<img src="/svg/filter.svg" alt="organization" />
				</div>
				<div   className="report_filter">
					<p>PHONE NUMBER</p>
					<img src="/svg/filter.svg" alt="organization" />
				</div>
				<div className="report_filter">
					<p>DATE JOINED</p>
					<img src="/svg/filter.svg" alt="organization" />
				</div>
				<div className="report_filter">
					<p>STATUS</p>
					<img src="/svg/filter.svg" alt="organization" />
				</div>
			</div>	
			{lenders.map(lender => (
				<UserReport 
					organization={lender.orgName}
					name={lender.userName}
					email={lender.email}
					tel={lender.phoneNumber}
					date={lender.createdAt}
				/>
			))}
            <Sorter />
		</div>
	);
}
export default Reports;
