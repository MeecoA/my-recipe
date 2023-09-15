import { Link, Outlet } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const NavBar = () => {
  return (
    <>
      <div id="navBar">
        <Tooltip title="Hey what's up? Why not try hovering at 'Home..' ">
          <div className="logo">ReciPeeks</div>
        </Tooltip>

        <div className="logo">|</div>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="recipes" className="nav-link">
              RECIPES by COUNTRY
            </Link>
          </li>
          <li>
            <Link to="recipes-by-category" className="nav-link">
              RECIPES by CATEGORY
            </Link>
          </li>
          <li>
            <Link to="favorites" className="nav-link">
              FAVORITES
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
      <Outlet />
    </>
  );
};

export default NavBar;
