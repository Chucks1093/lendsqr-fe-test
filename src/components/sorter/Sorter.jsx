import "./styles.scss";
import { useState } from "react";
import Selector from "../Selector/Selector";
import Input from "../input_bar/Input";

function Sorter() {

	return (
		<div className="sorter">
			<Selector label={"organization"} options={["dhdh", "shhshs"]}  />
			<Input label="Username" type="text" />
			<Input  label="Email" type="email" />
			<Input  label="Date" type="date" />
			<Input  label="Phone Number" type="number" />
			<Input  label="Email" type="emai" />
			<Selector label={"status"} options={["dhdh", "shhshs"]}  />
			<div className="button_cover">
				<button className="reset_btn" type="reset">Reset</button>
				<button className="filter_btn" type="button">Filter</button>
			</div>
		</div>
	);
}
export default Sorter;
