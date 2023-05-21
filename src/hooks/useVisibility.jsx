import { useEffect, useState } from "react";

function useVisibility(id) {
	const [visibility, setVisibility] = useState(false);
	const showVisibility = () => {
		setVisibility(true);
	};
	const hideVisiblity = (e) => {
		setVisibility(false)
	};	

	useEffect(()=>{
		const handleOutsideClick = (e)=>{
			const targetElement = !!document.getElementById("details_modal");
			if (targetElement && !e.target.closest(".details_modal")) {
				hideVisiblity();
			} 
			if (e.target.id == id ) {
				console.log(e.target.parentElement.parentElement)
				showVisibility();
			}
		}
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);

	}, [visibility]);

	return { visibility, showVisibility };
}

export default useVisibility;
