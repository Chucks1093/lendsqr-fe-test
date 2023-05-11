import getData from "../services/api";

function getLocalStorage() {
    const data = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : getData();
    return data;
}

export default getLocalStorage;