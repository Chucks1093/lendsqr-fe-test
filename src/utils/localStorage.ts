import getData from "../services/api";
import UserData from "../types/UserData";

function getLocalStorage() {
    const data: UserData[] = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string): getData();
    return data;
}

export default getLocalStorage;