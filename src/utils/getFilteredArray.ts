
import UserData from "../types/UserData";
import FilteredValue from "../types/FileterdValue";


function containsSubstring(mainString: string, substring:string) {
	const pattern = new RegExp(substring, "i");
	return pattern.test(mainString);
}
  
  

function getFilteredArray(
	comparisonObject: Partial<FilteredValue>, 
	data: UserData[] 
	): UserData[] {
	const filteredArray = data.filter(obj =>
		Object.entries(comparisonObject).every(([key, value]) => containsSubstring(obj[key as keyof UserData] as keyof UserData, value))
	);
	localStorage.setItem("lendsqrHistory", JSON.stringify(comparisonObject))
	return filteredArray;
}

export default getFilteredArray;