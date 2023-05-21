import "./styles.scss";
import { useRef } from "react";
import Selector from "../Selector/Selector";
import Input from "../input_bar/Input";
import getLocalStorage from "../../utils/localStorage";
import { useContext } from "react";
import StatusContext from "../../context/StatusContext";
import getFilteredArray from "../../utils/getFilteredArray";


function Sorter() {
	const { setLenders, showFirstLenders } = useContext(StatusContext);
	const inputOrganizaton = useRef(null);
	const userName = useRef(null);
	const eMail = useRef(null);
	const date = useRef(null);
	const tel = useRef(null);
	const inputStatus = useRef(null);

	const data = getLocalStorage();

	const organizations = [...new Set(data.map((ele) => ele.orgName))];

	const status = [...new Set(data.map((ele) => ele.status))];

	const resetForm = (e) => {
		e.preventDefault();
		inputOrganizaton.current.selectedIndex = 0;
		userName.current.value = "";
		eMail.current.value = "";
		date.current.value = "";
		tel.current.value = "";
		inputStatus.current.selectedIndex = 0;
		console.log(inputOrganizaton.current.value)
		setLenders(()=>{
			return {
				shownData: data.slice(0, 10),
				data: data
			}
		})
		showFirstLenders();
	};

	const filterUser =(e) => {
		e.preventDefault();
		const obj = {
			orgName: inputOrganizaton.current.value,
			userName: userName.current.value,
			email: eMail.current.value,
			createdAt: date.current.value,
			phoneNumber: tel.current.value,
			status: inputStatus.current.value
		};
		const newObj = Object.fromEntries(
			Object.entries(obj).filter(([key, value])=> value !== "")
		)
		const filteredData = getFilteredArray(newObj, data);
		setLenders(() => {
			const newArr = filteredData.slice(0, 10)
			console.log({shownData: newArr, data: filteredData})
			return {
				shownData: newArr,
				data: filteredData
			}
		})
		showFirstLenders();
	};

	return (
		<form onSubmit={filterUser} className="sorter">
			<Selector
				ref={inputOrganizaton}
				label={"Organization"}
				options={organizations}
			/>
			<Input ref={userName} label="Username" type="text" />
			<Input ref={eMail} label="Email" type="email" />
			<Input ref={date} label="Date" type="date" />
			<Input  ref={tel} label="Phone Number" type="number" />
			<Selector ref={inputStatus} label={"Status"} options={status} />
			<div className="button_cover">
				<button onClick={resetForm} className="reset_btn" type="reset">
					Reset
				</button>
				<button className="filter_btn" type="submit">
					Filter
				</button>
			</div>
		</form>
	);
}
export default Sorter;
