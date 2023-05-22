import "./styles.scss";


function Analytics(props) {
	return (
        <div className="analytics">
            <div className="img_bg" style={{backgroundColor: `${props.color}` }}>
                <img  src={`/svg/${props.image}.svg`} alt={props.title} />
            </div>
            <p>{props.title}</p>
            <span>{props.metrics}</span>
        </div>
    );
};
export default Analytics;
