
import UserData from "../types/UserData";
import FilteredValue from "../types/FileterdValue";



function getFilteredArray(
	comparisonObject: Partial<FilteredValue>, 
	data: UserData[] 
	): UserData[] {
	const filteredArray = data.filter(obj =>
		Object.entries(comparisonObject).every(([key, value]) => obj[key as keyof UserData] === value)
	);
	localStorage.setItem("lendsqrHistory", JSON.stringify(comparisonObject))
	return filteredArray;
}

export default getFilteredArray;