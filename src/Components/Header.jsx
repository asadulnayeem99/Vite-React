import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <NavLink to="/invent">Header</NavLink>
      <NavLink to="/footer">Footer</NavLink>
      <p>Hellooooooooooooooooo</p>
    </div>
  );
};

export default Header;
