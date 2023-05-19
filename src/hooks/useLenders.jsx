import { useState, useEffect } from "react";
import getLocalStorage from "../utils/localStorage";


function useLenders() {
    const [lenders, setLenders] = useState(getLocalStorage());
	const [{start , end}, setIndex] = useState({start: 0, end: 10})
	useEffect(()=>{
		const newArr = getLocalStorage().slice(start, end);
		setLenders(newArr)
	}, []);

	const showNextLenders= () => {
		if(end==100) return ;
		const newArr = getLocalStorage().slice(start + 10, end + 10);
		setLenders(newArr);
		setIndex({start: start + 10, end: end + 10});
	};


	const showPrevLenders= () => {
		if(start==0) return ;
		const newArr = getLocalStorage().slice(start - 10, end- 10);
		setLenders(newArr);
		setIndex({start: start - 10, end: end - 10});
	};
	
	return { lenders, showNextLenders, showPrevLenders };
}
export default useLenders;
