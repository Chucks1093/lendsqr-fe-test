import { useState, useEffect } from "react";
import getLocalStorage from "../utils/localStorage";
import getFilteredArray from "../utils/getFilteredArray";
	
function useLenders() {
	const [lenders, setLenders] = useState({
		shownData: getLocalStorage(),
		data: getLocalStorage()
	});
	const [{start , end}, setIndex] = useState({start: 0, end: 10})
	const [userStatus, setUserStatus] = useState(false);

	useEffect(()=>{
		setLenders((value)=> {
			const data = getLocalStorage();
			if (value.data.length === data.length) {
				return {
					...value,
					shownData: data.slice(start, end),
					data: data
				}
			} else {
				const obj = localStorage.getItem("lendsqrHistory") ? JSON.parse(localStorage.getItem("lendsqrHistory")) : data;
				const refreshedData = getFilteredArray(obj, data);
				const newArr = refreshedData.slice(start, end);
				return {
					...value,
					shownData: newArr,
					data: refreshedData
				}
			}
		})
	}, [userStatus]);


	const showFirstLenders = () => {
		setIndex({start: 0, end: 10});
	};
	
	const showNextLenders= () => {
		setLenders((value) =>{
			console.log(value.data.length)
			if(end >= value.data.length) return { ...value};
			const newArr = value.data.slice(start + 10, end + 10);
			setIndex({start: start + 10, end: end + 10});
			return {
				...value,
				shownData: newArr
			}
		});
	};

	const showPrevLenders= () => {
		setLenders((value) => {
			if(start <=0) return {...value};
			const newArr = value.data.slice(start - 10, end- 10);
			setIndex({start: start - 10, end: end - 10});
			return {
				...value,
				shownData: newArr,
			}
		})
	};
	
	return { 
		lenders,
		setLenders,
		showNextLenders,
		showFirstLenders,
		showPrevLenders, 
		setUserStatus
	};
}
export default useLenders;
