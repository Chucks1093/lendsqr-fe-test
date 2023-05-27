import "./styles.scss";

function UserInfo(){
	return(
        <div className="menu_user_info">
            <div className="user_id_container">
                <img src="creator.jpg" alt="" />
                <div>
                    <p>Adedeji S.</p>
                    <a href="#">Docs</a>
                </div>
            </div>
            <form className="menu_form" action="">
                <input placeholder="Search for anything" type="text" />
                <button><img src="/svg/search.svg" alt="" /></button>
            </form>
        </div>
    );
}
export default UserInfo;
