import months from "./months";

function dateFormatter(prop: string) {
	const date = new Date(prop);
	const formattedTime = date.toLocaleTimeString();
	const day = date.getDay();
	const month= months[date.getMonth()];
	const year = date.getFullYear();
	return `${month} ${day + 1},${year} ${formattedTime}`;
}

export default dateFormatter;