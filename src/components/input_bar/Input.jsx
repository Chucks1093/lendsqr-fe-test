import { useState, forwardRef } from "react";
import "./styles.scss";



const Input = forwardRef((props, ref) =>{
	const [value, setValue] = useState("");
    
    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    };
	return (
		<div>
			<label className="input_label" htmlFor={props.label}>{props.label}</label>
			<input className="selector_input"
				type={props.type}
				id={props.label}
				placeholder={props.label}
				value={value}
				ref={ref}
				onChange={handleChange}
			/>
		</div>
	);
})
export default Input;
