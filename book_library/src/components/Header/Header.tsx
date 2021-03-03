import { NavLink } from "react-router-dom";
import "./Header.styles.scss";
import NavlinkItem from "../NavlinkItem/NavlinkItem";
import Logo from "../../assets/images/logo.svg";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <div className="header">
        <NavlinkItem
          to={"/books"}
          customClasses="navlink navlink--big navlink--no-underline flex flex--row flex--justify-center"
        >
          <img className="logo" src={Logo} alt="" />
          Library
        </NavlinkItem>
        <nav>
          <ul>
            <NavlinkItem
              to={"/books/add"}
              customClasses="navlink navlink--no-underline"
            >
              Add Book
            </NavlinkItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
