import { useEffect, useState } from "react";

type IDType = string | number ;

function useVisibility(id : IDType ) {
	const [visibility, setVisibility] = useState(false);
	const menubutton = document.getElementById("menu-bar");
	const sideBar = document.getElementById("nav-bar") as HTMLHeadingElement;
	const showVisibility = () => {
		setVisibility(true);
	};
	const hideVisiblity = () => {
		setVisibility(false);
		sideBar.classList.add("hide_bar")
		console.log(sideBar)
	};	

	useEffect(()=>{
		const handleOutsideClick = (e: Event )=>{
			const detailsModal = !!document.getElementById("details_modal");
			const filterModal = !!document.getElementById("sorter");
			const targetElement = e.target as Element;
			if (detailsModal && !targetElement.closest(".details_modal")) {
				hideVisiblity();
			} else if (filterModal && !targetElement.closest("#sorter")) {
				hideVisiblity()
			}
			
			if (targetElement.id == id ) {
				showVisibility();
			}
		}
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);

	}, [visibility, id]);

	return { visibility, showVisibility };
}

export default useVisibility;
