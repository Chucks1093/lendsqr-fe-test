const statusArr = ['inactive', 'active', 'pending', 'blacklisted'];

function getRandomValue(value) {
	const randomIndex = Math.floor(Math.random() * value.length);
	return value[randomIndex];	
}

async function getData() {
    const resp = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
    const data = await resp.json();
    // const neWData = 
    localStorage.setItem("users", JSON.stringify(data));
    return data;
};

export default getData;

