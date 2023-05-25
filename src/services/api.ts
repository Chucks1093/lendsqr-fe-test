import UserData from "../types/UserData";
import addStatusProperty from "../utils/addStatusProperty";




async function getData(): Promise<UserData[]> {
    const resp = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
    const data: Omit<UserData[], 'status'> = await resp.json();
    const newData = addStatusProperty(data);
    localStorage.setItem("users", JSON.stringify(newData));
    return newData;
}



export default getData;

