import addStatusProperty from "../utils/addStatusProperty";




async function getData() {
    const resp = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
    const data = await resp.json();
    const newData = addStatusProperty(data);
    localStorage.setItem("users", JSON.stringify(newData));
    return newData;
}



export default getData;

