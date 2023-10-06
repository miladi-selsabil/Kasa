import logo from "./../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./../index.css";
function header() {
  return (
    <header>
      <div className="header-section">
        <img src={logo} />
        <nav>
          <NavLink to={"/"}>Acceuil</NavLink>
          <NavLink to={"about"}>A propos</NavLink>
        
        </nav>
      </div>
    </header>
  );
}
export default header;
