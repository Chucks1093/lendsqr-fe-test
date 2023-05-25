import UserData from "./UserData";


interface LendersHookResult {
	lenders: {
		shownData: UserData[];
		data: UserData[];
	};
	setLenders: React.Dispatch<
		React.SetStateAction<{
			shownData: UserData[];
			data: UserData[];
		}>
	>;
	showNextLenders: () => void;
	showFirstLenders: () => void;
	showPrevLenders: () => void;
	updateUserStatus: () => void;
}

export default LendersHookResult;