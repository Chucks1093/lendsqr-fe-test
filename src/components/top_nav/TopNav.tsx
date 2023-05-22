import { Fragment } from "react";
import "./styles.scss";

function TopNav() {
	return (
        <header  className="header">
            <div className="dashboard_logo">
                <img src="/logo.svg" alt="lendsqr" />
                <span>lendsqr</span>
            </div>
            <form className="dashboard_form" action="">
                <input placeholder="Search for aanything" type="text" />
                <button><img src="/svg/search.svg" alt="" /></button>
            </form>
            <div className="header_info">
                <a href="">Docs</a>
                <img className="notification" src="/svg/bell.svg" alt="" />
                <div className="user_profile">
                    <img className="user_image" src="/creator.jpg" alt="" />
                    <span>Adedeji</span>
                    <img className="list" src="/svg/arrow_down.svg" alt="" />
                </div>
            </div>
        </header>

    );
};
export default TopNav;
