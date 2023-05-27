import "./styles.scss";
import { Link } from "react-router-dom";
import {useState} from "react"

function SignIn() {
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const togglePasswordVisibility =() => {
		setPasswordVisibility(!passwordVisibility);
	}
	return (
		<>
            <div className="login_heading">
				<div className="login_logo">
					<img src="logo.svg" alt="lendsqr" />
				</div>
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
						<input type="email" placeholder="Email" />
						<div className="wrapper">
							<input type={passwordVisibility? "password" : "text"}placeholder="Password" />
							<span onClick={togglePasswordVisibility}>{passwordVisibility? "Show" : "Hide"}</span>
						</div>
						<a href="">FORGET PASSWORD?</a>
						<Link to="/dashboard"><button>LOG IN</button></Link>
						
					</form>
				</div>
			</div>
		</>
	);
}
export default SignIn;
