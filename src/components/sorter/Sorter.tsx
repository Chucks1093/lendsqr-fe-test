import "./styles.scss";
import { useState } from "react";
import Selector from "../Selector/Selector";
import Input from "../input_bar/Input";
import getLocalStorage from "../../utils/localStorage";
import { useContext } from "react";
import StatusContext from "../../context/StatusContext";
import getFilteredArray from "../../utils/getFilteredArray";

function Sorter() {
	const { setLenders, showFirstLenders } = useContext(StatusContext);
	const [inputValue, setInputValue] = useState({
		organization: "",
		username: "",
		email: "",
		date: "",
		phoneNumber: "",
		status: "",
	});
	
	const data = getLocalStorage();
	const organizations = [...new Set(data.map((ele) => ele.orgName))];
	const status = [...new Set(data.map((ele) => ele.status))];

	const resetForm = (e) => {
		e.preventDefault();
		setInputValue(()=> {
			return {
				organization: "",
				username: "",
				email: "",
				date: "",
				phoneNumber: "",
				status: ""
			}
		})
		setLenders(() => {
			return {
				shownData: data.slice(0, 10),
				data: data,
			};
		});
		showFirstLenders();
	};

	const filterUser = (e) => {
		e.preventDefault();
		const obj = {
			orgName: inputValue.organization,
			userName: inputValue.username,
			email: inputValue.email,
			createdAt: inputValue.date,
			phoneNumber:inputValue.phoneNumber,
			status: inputValue.status,
		};
		const newObj = Object.fromEntries(
			Object.entries(obj).filter(([key, value]) => value !== "")
		);
		const filteredData = getFilteredArray(newObj, data);
		setLenders(() => {
			const newArr = filteredData.slice(0, 10);
			return {
				shownData: newArr,
				data: filteredData,
			};
		});
		showFirstLenders();
	};

	return (
		<form  id="sorter" onSubmit={filterUser} className="sorter">
			<Selector
				label={"organization"}
				options={organizations}
				value={inputValue.organization}
				setInputValue={setInputValue}
			/>
			<Input
				label="username"
				type="text"
				value={inputValue.username}
				setInputValue={setInputValue}

			/>
			<Input
				label="email"
				type="email"
				value={inputValue.email}
				setInputValue={setInputValue}

			/>
			<Input
				label="date"
				type="date"
				value={inputValue.date}
				setInputValue={setInputValue}
			/>
			<Input
				label={`phone Number`}
				type="number"
				value={inputValue.phoneNumber}
				setInputValue={setInputValue}
			/>
			<Selector
				label={"status"}
				options={status}
				value={inputValue.status}
				setInputValue={setInputValue}

			/>
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
