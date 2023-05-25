import "./styles.scss";
import Analytics from "../../components/analytics/Analytics";
import Reports from "../../components/reports/Reports";
import { Fragment } from "react";
import useLenders from "../../hooks/useLenders";
import StatusContext from "../../context/StatusContext";
import Pagination from "../../components/pagination/Pagination";


function UserPage() {
	const {
		lenders,
		currentPage,
		handlePageClick,
		setLenders,
		showFirstLenders,
		showNextLenders,
		showPrevLenders,
		updateUserStatus
	} = useLenders();
	return (
		<Fragment>
			<h1 className="page_title">Users</h1>
			<div className="analytics_container">
				<Analytics
					image="allusers"
					title={"USERS"}
					metrics={"2,453"}
					color={"rgba(224, 24, 255, 0.1)"}
				/>
				<Analytics
					color={"rgba(87, 24, 255, 0.1)"}
					image="activeusers"
					title={"ACTIVE USERS"}
					metrics={"2,453"}
				/>
				<Analytics
					color={"rgba(245, 95, 68, 0.1)"}
					image={"loans_user"}
					title={"USERS WITH LOAN"}
					metrics={"2,543"}
				/>
				<Analytics
					color={"rgba(255, 51, 102, 0.1)"}
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
						{lenders.data.map((info)=> (
							<option>{info.id}</option>
						))}
					</select>
					<p>{`out of ${lenders.data.length}`}</p>
				</div>
				<Pagination 
					currentPage={currentPage}
					userData={lenders} 
					next={showNextLenders}
					back={showPrevLenders}
					handlePageClick={handlePageClick}
				/>
			</div>
		</Fragment>
	);
}
export default UserPage;
