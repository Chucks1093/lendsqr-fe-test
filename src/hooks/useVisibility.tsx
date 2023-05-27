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
			const dashBoard = document.querySelector("#dash_board") as HTMLElement;	
			const menubutton = document.querySelector("#menu-bar") as HTMLImageElement;
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
			
			if (dashBoard.classList.contains("show_bar") && !targetElement.closest("nav")) {
				dashBoard.classList.toggle("show_bar")

				// sideBar.classList.add("show_bar");
				menubutton.src = "/svg/menu.svg";
			} else if (targetElement== menubutton && !dashBoard.classList.contains("show_bar"))  {
				console.log("opend from menu")
				dashBoard.classList.toggle("show_bar")
				menubutton.src = "/svg/cancel.svg";

			} else if (targetElement== menubutton && dashBoard.classList.contains("show_bar")) {
				dashBoard.classList.toggle("show_bar")

			} 
			


	
		}
		

		document.addEventListener("click", handleOutsideClick);

		return () => document.removeEventListener("click", handleOutsideClick);

	}, [visibility, id]);

	return { visibility, showVisibility };
}

export default useVisibility;
