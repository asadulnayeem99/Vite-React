import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/invent">Header</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      </nav>
      <p>Hellooooooooooooooooo</p>
    </div>
  );
};

export default Header;
