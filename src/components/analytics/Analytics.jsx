import "./styles.scss";


function Analytics(props) {
	return (
        <div className="analytics">
            <img src="/svg/allusers.svg" alt={props.title} />
            <p>{props.title}</p>
            <span>{props.metrics}</span>
        </div>
    );
};
export default Analytics;
