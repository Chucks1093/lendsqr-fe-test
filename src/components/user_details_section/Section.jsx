function Section(props) {
	return (
		<div>
			<h3>Pesonal Information</h3>
			{props.data.map((info) => {
				<div className="info">
					<p className="top">FULL NAME</p>
					<p className="bottom">Grace Effiom</p>
				</div>;
			})}
		</div>
	);
}
export default Section;
