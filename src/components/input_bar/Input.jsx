import "./styles.scss";

function Input(props) {
	return (
		<div>
			<label className="input_label" htmlFor={props.label}>{props.label}</label>
			<input className="selector_input"
				type={props.type}
				id={props.label}
				placeholder={props.label}
			/>
		</div>
	);
}
export default Input;
