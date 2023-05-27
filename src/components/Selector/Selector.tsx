import "./styles.scss";
import InputValue from "../../types/InputValue";

type SelectorProps = {
    label: string;
    options: readonly string[];
    value: string | "";
    setInputValue: React.Dispatch<React.SetStateAction<InputValue>>
}

function Selector(props: SelectorProps){
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const property = props.label.replace(/\s/g, '');
        props.setInputValue((value)=> {
            return {
                ...value,
                [property] : e.target.value
            }
        })
    };
    
    return (
        <div className={props.label}>
            <label className="selector_label" htmlFor={props.label}>{props.label}</label>
            <select
                className={"selector"}
                id={props.label}
                value={props.value}
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
