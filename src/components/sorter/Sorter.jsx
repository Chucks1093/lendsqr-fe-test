import "./styles.scss";

function Sorter() {
	return (
		<div className="sorter">
			<label htmlFor="organization">Organization</label>
			<select
				name="organizaation"
				id="organizaation"
			>
				<option value="" selected disabled >Select An option</option>
				<option value="Select">SFggewqi</option>
				<option value="Select">uzzzzzzegffq</option>
				<option value="Select">ugauuur</option>
				<option value="Select">ppeufb</option>
			</select>

            <label htmlFor="username">Username</label>
            <input type="text"  id="username" placeholder="User" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" />
            <label htmlFor="status">Status</label>
            <select
				name="organizaation"
				id="organizaation"
			>
				<option value="" selected disabled >Select An option</option>
				<option value="Select">SFggewqi</option>
				<option value="Select">uegffq</option>
				<option value="Select">ugauuur</option>
				<option value="Select">ppeufb</option>
			</select>
            <button  type="reset">Reset</button>
            <button type="button">Filter</button>
		</div>
	);
}
export default Sorter;
