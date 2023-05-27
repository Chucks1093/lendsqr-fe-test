import { useEffect, useState } from "react";

type IDType = string | number ;

function useVisibility(id : IDType ) {
	const [visibility, setVisibility] = useState(false);
	const showVisibility = () => {
		setVisibility(true);
	};
	const hideVisiblity = () => {
		setVisibility(false)
	};	

	useEffect(()=>{
		const handleOutsideClick = (e: Event )=>{
			const detailsModal = !!document.getElementById("details_modal");
			const filterModal = !!document.getElementById("sorter");
			const targetElement = e.target;
			if (detailsModal && !(targetElement instanceof Element && targetElement.closest(".details_modal"))) {
					hideVisiblity();
				} else if (filterModal && !(targetElement instanceof Element && targetElement.closest("#sorter"))) {
					hideVisiblity()
				}
			
			if (targetElement instanceof Element && targetElement.id == id ) {
				showVisibility();
			}
		}
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);

	}, [visibility, id]);

	return { visibility, showVisibility };
}

export default useVisibility;
