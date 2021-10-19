import "./MobileNav.css";
import { VscChromeClose } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";

const MobileNav = (props) => {
  return (
    <div className="MobileNav">
      <div className="close-btn">
        <VscChromeClose
          size={30}
          onClick={() => {
            props.close();
          }}
          color="white"
        />
      </div>
      <div
        className="mobile-link"
        onClick={() => {
          props.close();
        }}
      >
        <NavLink
          activeClassName="mobileActive"
          className="nav-link"
          to="/addStudents"
        >
          ADD STUDENT
        </NavLink>
      </div>
      <div
        className="mobile-link"
        onClick={() => {
          props.close();
        }}
      >
        <NavLink
          activeClassName="mobileActive"
          className="nav-link"
          to="/viewStudents"
        >
          VIEW STUDENTS
        </NavLink>
      </div>
      <div
        className="mobile-link"
        onClick={() => {
          props.close();
        }}
      >
        <NavLink
          activeClassName="mobileActive"
          className="nav-link"
          to="/editStudents"
        >
          EDIT STUDENT
        </NavLink>
      </div>
      <div
        className="mobile-link"
        onClick={() => {
          props.close();
        }}
      >
        <NavLink
          activeClassName="mobileActive"
          className="nav-link"
          to="/deleteStudents"
        >
          DELETE STUDENT
        </NavLink>
      </div>
      <div
        className="mobile-link"
        onClick={() => {
          props.close();
          props.logout();
        }}
      >
        <Link className="nav-link " to="/">
          LOGOUT
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
