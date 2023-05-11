import { useState } from "react";

function useVisibility() {
    const [visiblility, setVisibility] = useState(false);
    const showVisibility = () => setVisibility(true);
    const hideVisiblity = () => setVisibility(false);
	return {visiblility, showVisibility, hideVisiblity}
}

export default useVisibility;
