// import { createContext, useEffect, useState } from "react";
// import getLocalStorage from "../utils/localStorage";
// import UserPage from "../pages/user_page/UserPage";
// import Reports from "../components/reports/Reports";


// export const LenderContext = createContext();

// function LenderProvider() {
//     const [lenders, setLenders] = useState(getLocalStorage());
// 	const [{start , end}, setIndex] = useState({start: 0, end: 10})
// 	useEffect(()=>{
// 		const newArr = getLocalStorage().slice(start, end);
// 		console.log(newArr, "current")
// 		setLenders(newArr)
// 	}, []);

// 	const showNextLenders= () => {
// 		// setIndex({start: lenders.start + 10, end: lenders.end + 10});
// 		const newArr = getLocalStorage().slice(start + 10, end + 10);
// 		console.log(newArr, 'next')
// 		setLenders(newArr);
// 		console.log(lenders, "hook lenders")
// 	};
// 	return (
//         <LenderContext.Provider value={{lenders, showNextLenders}}>
//             <
//         </LenderContext.Provider>
//     );
// }
