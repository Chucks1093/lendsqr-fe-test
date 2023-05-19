import getLocalStorage from "./localStorage";

function blackListUser(setData, e) {
	const allData = getLocalStorage();
	const id = e.currentTarget.parentElement.previousElementSibling.id - 1;
	const userCurrentStatus = allData[id].status;
	allData[id].status = userCurrentStatus == "active"? "blacklisted" : userCurrentStatus;
	localStorage.setItem("users", JSON.stringify(allData));
	setData((value)=>!value);
}

export default blackListUser;