
function Section(props) {
	
	return (
		<div>
			<h3>{props.title}</h3>
			{props.data.map((info, i) => {
				return <div key={i} className="info">
					<p className="top">{info.top}</p>
					<p className="bottom">{info.bottom}</p>
				</div>;
			})}
		</div>
	);
}

export default Section;
