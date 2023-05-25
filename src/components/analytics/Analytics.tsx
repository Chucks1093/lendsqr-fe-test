import "./styles.scss";


type AnalyticsProps = {
    image: string;
    title: string;
    color: string;
    metrics: string;
}

function Analytics(props: AnalyticsProps) {
	return (
        <div className="analytics">
            <div className="img_bg" style={{backgroundColor: `${props.color}` }}>
                <img  src={`/svg/${props.image}.svg`} alt={props.title} />
            </div>
            <p>{props.title}</p>
            <span>{props.metrics}</span>
        </div>
    );
}
export default Analytics;
