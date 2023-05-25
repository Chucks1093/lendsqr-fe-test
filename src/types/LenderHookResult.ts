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
	currentPage: number;
	handlePageClick: (pageNumber: number) => void;
	showNextLenders: () => void;
	showFirstLenders: () => void;
	showPrevLenders: () => void;
	updateUserStatus: () => void;
}

export default LendersHookResult;