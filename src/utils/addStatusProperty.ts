import UserData from "../types/UserData";


const statusArr = ['inactive', 'active', 'pending', 'blacklisted'] as const;


function getRandomValue(value: typeof statusArr) {
    const randomIndex = Math.floor(Math.random() * value.length);
    return value[randomIndex];
}

function addStatusProperty(data: Omit<UserData[], 'status'>): UserData[] {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
        const newEle = data[i];
        const status = getRandomValue(statusArr);
        newData.push({ ...newEle, status: status })
    }
    return newData;
}

export default addStatusProperty;