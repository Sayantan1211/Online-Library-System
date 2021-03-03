import { Link } from "react-router-dom";
import "./NavlinkItem.styles.scss";

interface NavlinkProps {
  to: string;
  customClasses?: string | null | undefined;
  children?: any;
}

const NavLink = (props: NavlinkProps) => {
  const { to, customClasses, children } = props;

  return (
    <Link to={to} className={customClasses || "navlink"}>
      {children}
    </Link>
  );
};

export default NavLink;
