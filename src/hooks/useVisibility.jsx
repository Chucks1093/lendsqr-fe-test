import { useEffect, useState } from "react";

function useVisibility(id) {
	const [visibility, setVisibility] = useState(false);
	const showVisibility = () => {
		console.log("I am here")
		setVisibility(true);
	};
	const hideVisiblity = (e) => {
		console.log("I left")
		// console.log(e.target)
		setVisibility(false)
	};

	useEffect(()=>{
		const handleOutsideClick = (e)=>{
			// console.log(!e.target.closest(".details_modal"))
			if (!e.target.closest(".details_modal")) {
				console.log(visibility, "visibility")
				console.log(e.target.id == id)
				hideVisiblity();
			} 
			if (e.target.id == id) {
				showVisibility();
			}
		}
		window.addEventListener("click", handleOutsideClick);

		return () => window.removeEventListener("click", handleOutsideClick);

	}, [visibility]);

	return { visibility, showVisibility };
}

export default useVisibility;
