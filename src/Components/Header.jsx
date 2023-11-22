import React from "react";
const style = {
  display: "flex",
  gap: "10px",
  textDecoration: "none",
  fontSize: "20px",
  color: "green",
};
const Header = () => {
  return (
    <div>
      <nav style={style}>
        <a href="/invent">Header</a>
        <a href="/footer">Footer</a>
      </nav>
    </div>
  );
};

export default Header;
