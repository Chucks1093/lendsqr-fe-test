import { useState, useEffect, useCallback } from "react";
import getLocalStorage from "../utils/localStorage";
import getFilteredArray from "../utils/getFilteredArray";
import LendersHookResult from "../types/LenderHookResult";

function useLenders(): LendersHookResult {
	const [lenders, setLenders] = useState({
		shownData: getLocalStorage(),
		data: getLocalStorage(),
	});
	const [{ start, end }, setIndex] = useState({ start: 0, end: 10 });
	const [currentPage, setCurrentPage] = useState(1);


	const updateUserStatus = useCallback(() => {
		setLenders((value) => {
			const data = getLocalStorage();
			if (value.data.length === data.length) {
				console.log("I updated status --1")
				return {
					...value,
					shownData: data.slice(start, end),
					data: data,
				};
			} else {
				const obj = localStorage.getItem("lendsqrHistory")
					? JSON.parse(
							localStorage.getItem("lendsqrHistory") as string
						)
					: data;
				const refreshedData = getFilteredArray(obj, data);
				const newArr = refreshedData.slice(start, end);
				console.log("I updated status --2")
				return {
					...value,
					shownData: newArr,
					data: refreshedData,
				};
			}
		});
	}, [start, end]);

	useEffect(() => {
		updateUserStatus();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const showFirstLenders = () => {
		setIndex({ start: 0, end: 10 });
		setCurrentPage(1);
	};

	const handlePageClick = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		const slicedIndex = pageNumber * 10;
		setIndex({start: slicedIndex - 10  , end:slicedIndex});
		setLenders((value) => {
			const newArr = value.data.slice(slicedIndex-10, slicedIndex);
			return {
				...value,
				shownData: newArr
			}
		})
	}

	const showNextLenders = () => {
		setLenders((value) => {
			if (end >= value.data.length) return { ...value };
			const newArr = value.data.slice(start + 10, end + 10);
			setCurrentPage(currentPage + 1);
			setIndex({ start: start + 10, end: end + 10 });
			return {
				...value,
				shownData: newArr,
			};
		});
	};

	const showPrevLenders = () => {
		setLenders((value) => {
			if (start <= 0) return { ...value };
			const newArr = value.data.slice(start - 10, end - 10);
			setCurrentPage(currentPage - 1);
			setIndex({ start: start - 10, end: end - 10 });
			return {
				...value,
				shownData: newArr,
			};
		});
	};

	return {
		lenders,
		currentPage,
		handlePageClick,
		setLenders,
		showNextLenders,
		showFirstLenders,
		showPrevLenders,
		updateUserStatus,
	};
}
export default useLenders;
