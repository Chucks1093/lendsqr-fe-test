import UserData from "../../types/UserData";
import "./styles.scss";

interface PaginationProps {
	currentPage: number;
	userData: {
		shownData: UserData[];
		data: UserData[];
	};
	handlePageClick: (pageNumber: number) => void;
	next: () => void;
	back: () => void;
}

function Pagination(props: PaginationProps) {
	const totalPages = Math.ceil(props.userData.data.length / 10);
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	const lastPage = pageNumbers[pageNumbers.length - 1];
	const firstPage = pageNumbers[0];

	return (
		<div className="pagination">
			<button
				className={`${
					props.currentPage !== firstPage ? "move" : undefined
				}`}
				onClick={props.back}
			>
				<img src="/svg/arrow_left.svg" alt="" />
			</button>
			<div className="page_number_container">
				{pageNumbers.map((page, i) => (
					<span
						key={i}
						onClick={() => props.handlePageClick(page)}
						className={`${
							props.currentPage == page ? "active" : undefined
						}`}
					>
						{page}
					</span>
				))}
			</div>
			<button
				className={`${
					props.currentPage !== lastPage ? "move" : undefined
				}`}
				onClick={props.next}
			>
				<img src="/svg/arrow_right.svg" alt="" />
			</button>
		</div>
	);
}
export default Pagination;
