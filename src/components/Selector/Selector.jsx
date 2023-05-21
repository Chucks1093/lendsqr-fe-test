import "./styles.scss";
import { useState, forwardRef } from "react";



const Selector = forwardRef((props, ref) =>{
    const [value, setValue] = useState("");
    
    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    };
    
    return (
        <div>
            <label className="selector_label" htmlFor={props.label}>{props.label}</label>
            <select
                className={"selector"}
                id={props.label}
                value={value}
                ref={ref}
                onChange={handleChange}
            > 
                <option className="default_option" value="" disabled>Select</option>
                {props.options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );

})
export default Selector;
