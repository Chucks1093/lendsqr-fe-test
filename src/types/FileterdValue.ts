
interface FilteredValue {
	orgName: string;
	userName: string;
	email: string;
	createdAt: string;
	phoneNumber: string;
	status:  "active" | "inactive" | "blacklisted" | "pending";
}

export default FilteredValue;