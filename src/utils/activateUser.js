import getLocalStorage from "./localStorage";


function activateUser(setData, e) {
	const allData = getLocalStorage();
	const id = e.currentTarget.parentElement.previousElementSibling.id -1;
	const userCurrentStatus = allData[id].status;
	allData[id].status = userCurrentStatus == "blacklisted"? "active" : userCurrentStatus;
	localStorage.setItem("users", JSON.stringify(allData));
	setData((value)=>!value);
}

export default activateUser;