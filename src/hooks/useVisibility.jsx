import { useState } from "react";

function useVisibility() {
	const [visibility, setVisibility] = useState(false);
	const showVisibility = () => {
		console.log("shown");
		setVisibility(true);
	};
	const hideVisiblity = () => setVisibility(false);
	return { visibility, showVisibility, hideVisiblity };
}

export default useVisibility;
