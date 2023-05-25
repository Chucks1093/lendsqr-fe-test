interface InputValue<T = number>  {
	organization: string;
	username: string;
	email: string;
	date: string;
	phoneNumber: string;
	status:  "active" | "inactive" | "blacklisted" | "pending"| "";
    id? : T
}

export default InputValue;