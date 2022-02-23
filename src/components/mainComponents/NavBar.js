import { Link } from "react-router-dom";
import { StyledNavBar } from "../styledComponents/NavBar.styled";

const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <Link to="/">
          <img
            className="linkIcon"
            src="../images/icons/iconHome.png"
            alt="home icon"
          />
        </Link>
        <Link to="/products">
          <img
            className="linkIcon"
            src="../images/icons/iconMenu.png"
            alt="menu icon"
          />
        </Link>
        <Link to="/signIn">
          <img
            className="linkIcon"
            src="../images/icons/iconPerson.png"
            alt="person icon"
          />
        </Link>
        <Link to="/cart">
          <img
            className="linkIcon"
            src="../images/icons/iconShop.png"
            alt="shop icon"
          />
        </Link>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
