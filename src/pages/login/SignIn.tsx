
import "./styles.scss";

function SignIn() {
	return (
		<>
            <div className="login_logo">
                <img src="logo.svg" alt="lendsqr" />
                <span>lendsqr</span>
            </div>
			<div className="container">
				<div className="login_image_container">
					<img src="login.svg" className="login_image" alt="login image" />
				</div>
				<div className="form_container">
					<div className="form_title">
						<h2>Welcome!</h2>
						<span>Enter details to login.</span>
					</div>
					<form
						className="form"
						action="
                        "
					>
						<input type="text" placeholder="Email" />
						<div className="wrapper">
							<input type="text" placeholder="Password" />
							<span>SHOW</span>
						</div>
						<a href="">FORGET PASSWORD?</a>
						<button>LOG IN</button>
					</form>
				</div>
			</div>
		</>
	);
}
export default SignIn;
