


function getFilteredArray(comparisonObject, data) {
	const filteredArray = data.filter(obj =>
		Object.entries(comparisonObject).every(([key, value]) => obj[key] == value)
	);
	localStorage.setItem("lendsqrHistory", JSON.stringify(comparisonObject))
	return filteredArray;
};

export default getFilteredArray;