import { Fragment } from "react";
import "./styles.scss";
import { useState } from "react";

function Selector(props) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    };

	return (
        <div>
            <label className="selector_label" htmlFor="organization">{props.label}</label>
			<select
                className={"selector"}
				id={props.label}
                value={value}
                onChange={handleChange}
			> 
                <option className="default_option" value="" disabled>Select</option>
                {props.options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                ))}
			</select>
        </div>
    );
}
export default Selector;
