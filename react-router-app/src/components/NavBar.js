import { NavLink } from "react-router-dom";
import "../index.css";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="products">Products</NavLink>
    </nav>
  );
};
