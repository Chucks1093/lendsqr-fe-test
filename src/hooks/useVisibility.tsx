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
			const detailsModal = !!document.getElementById("details_modal");
			const filterModal = !!document.getElementById("sorter");
			if ((detailsModal && !e.target.closest(".details_modal")) || (filterModal && !e.target.closest("#sorter"))) {
				hideVisiblity();
			} 
			if (e.target.id == id ) {
				showVisibility();
			}
		}
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);

	}, [visibility]);

	return { visibility, showVisibility };
}

export default useVisibility;
