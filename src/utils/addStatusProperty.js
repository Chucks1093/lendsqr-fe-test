const statusArr = ['inactive', 'active', 'pending', 'blacklisted'];

function getRandomValue(value) {
	const randomIndex = Math.floor(Math.random() * value.length);
	return value[randomIndex];	
}

function addStatusProperty(data) {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
        const newEle = data[i];
        const status = getRandomValue(statusArr);
        newData.push({...newEle, status: status})
    }
    return newData;
};

export default addStatusProperty;