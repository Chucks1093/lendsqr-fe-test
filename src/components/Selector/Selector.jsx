import "./styles.scss";


function Selector(props){
    
    const handleChange = (e) => {
        const newWord = props.label.replace(/\s/g, '');
        props.setInputValue((value)=> {
            return {
                ...value,
                [newWord] : e.target.value
            }
        })
    };
    
    return (
        <div>
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
