import { useEffect, useState } from "react";

type IDType = string | number ;

function useVisibility(id : IDType ) {
	const [visibility, setVisibility] = useState(false);
	const showVisibility = () => {
		setVisibility(true);
	};
	const hideVisiblity = () => {
		setVisibility(false);
		
	};	
	
	useEffect(()=>{
		const handleOutsideClick = (e: Event )=>{
			const sideBar = document.querySelector("#nav-bar") as HTMLElement;	
			const menubutton = document.querySelector("#menu-bar") as HTMLElement;
			const detailsModal = !!document.getElementById("details_modal");
			const filterModal = !!document.getElementById("sorter");
			const targetElement = e.target as Element;
			if (!sideBar.classList.contains("hide_bar") && !targetElement.closest("nav")) {
				sideBar.classList.add("hide_bar");

			}
			if (detailsModal && !targetElement.closest(".details_modal")) {
				hideVisiblity();
			} else if (filterModal && !targetElement.closest("#sorter")) {
				hideVisiblity()
			}
			
			if (targetElement.id == id ) {
				showVisibility();
			} 
			if (targetElement == menubutton) {
				console.log("show bar")
				sideBar.classList.remove("hide_bar");
				console.log(sideBar)
			}
		}
		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);

	}, [visibility, id]);

	return { visibility, showVisibility };
}

export default useVisibility;
