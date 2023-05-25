import getLocalStorage from "./localStorage";
import { StatusContextValue } from "../context/StatusContext";

function blackListUser(
	updateUserStatus: StatusContextValue["updateUserStatus"] | undefined,
	e:React.MouseEvent<HTMLDivElement, MouseEvent>
	): void  {
	const allData = getLocalStorage();
	const id = Number(e.currentTarget?.parentElement?.previousElementSibling?.id) - 1;
	const userCurrentStatus = allData[id].status;
	allData[id].status = userCurrentStatus == "active"? "blacklisted" : userCurrentStatus;
	localStorage.setItem("users", JSON.stringify(allData));
	updateUserStatus?.();
}

export default blackListUser;