import "./styles.scss";

function Input(props) {
	const handleChange = (e) => {
		const newWord = props.label.replace(/\s/g, '');
		props.setInputValue((value)=> {
            return {
                ...value,
                [newWord] : e.target.value
            }
		})
	}
	return (
		<div>
			<label className="input_label" htmlFor={props.label}>
				{props.label}
			</label>
			<input
				className="selector_input"
				type={props.type}
				id={props.label}
				placeholder={props.label}
				value={props.value}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Input;
