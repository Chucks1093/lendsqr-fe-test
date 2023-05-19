import { useEffect, useState } from "react";

function useVisibility(id) {
	const [visibility, setVisibility] = useState(false);
	const showVisibility = () => {
		setVisibility(true);
	};
	const hideVisiblity = (e) => {
		console.log("clicked the screen")
		setVisibility(false)
	};	

	useEffect(()=>{
		const handleOutsideClick = (e)=>{
			if (!e.target.closest(".details_modal")) {
				hideVisiblity();
			} 
			if (e.target.id == id) {
				console.log("show details modad")
				showVisibility();
			}
		}
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);

	}, [visibility]);

	return { visibility, showVisibility };
}

export default useVisibility;
