import MenuOptions from "../menu_options/MenuOptions";
import "./styles.scss";

function SideNav() {
	return (
		<nav>
			<MenuOptions name={"Swich Organization"} icon="allusers" list={true} />
            <MenuOptions name={"Swich Organization"} icon="activeusers" />        
            <div>
                <h3>CUSTOMERS</h3>
                <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  
                <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  
                
            </div>    
            <div>   
                <h3>BUSINESSES</h3>
                <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  
                <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  
            </div>   
            <div>
                <h3>SETTINGS</h3>
                <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  
                <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />  <MenuOptions name={"Swich Organization"} icon="briefcase" />
            </div>
		</nav>
	);
}
export default SideNav;
