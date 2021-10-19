import { useEffect } from "react";
import { useContext } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import AddStudent from "../AddStudent/AddStudent";
import DeleteStudent from "../DeleteStudent/DeleteStudent";
import EditStudent from "../EditStudent/EditStudent";
import studentContext from "../Store/Context";

import ViewStudent from "../ViewStudent/ViewStudent";
import "./Dashboard.css";

import { HiOutlineUserAdd } from "react-icons/hi";
import { MdOutlineViewList } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
let initial = true;
const Dashboard = (props) => {
  const ctx = useContext(studentContext);
  useEffect(() => {
    if (initial) {
      const getRequest = async () => {
        const response = await fetch(
          "https://studentproject-d7e8a-default-rtdb.firebaseio.com/students.json"
        );
        let data = await response.json();
        if (!data) {
          data = [];
        }
        ctx.replaceStudents(data);
      };
      getRequest();
      initial = false;
    }
  }, [ctx]);
  useEffect(() => {
    postHttpRequest(ctx.students);
  }, [ctx.students]);
  const postHttpRequest = async (data) => {
    const response = await fetch(
      "https://studentproject-d7e8a-default-rtdb.firebaseio.com/students.json",
      { method: "PUT", body: JSON.stringify(data) }
    );
    console.log(response);
  };
  return (
    <div className="Dashboard">
      <div className="sidenav">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/addStudents"
            >
              <HiOutlineUserAdd size={20} /> &nbsp; Add Student
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/viewStudents"
            >
              <MdOutlineViewList size={20} /> &nbsp; View Students
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/editStudents"
            >
              <AiOutlineEdit size={20} /> &nbsp; Edit Students
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/deleteStudents"
            >
              <RiDeleteBin6Line size={20} /> &nbsp;Delete Students
            </NavLink>
          </li>
          <li
            className="nav-item"
            onClick={(event) => {
              event.preventDefault();
              props.logout();
            }}
          >
            <Link className="nav-link " to="/">
              <MdLogout size={20} /> &nbsp; Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="matter me-3">
        <Route path="/" exact>
          <ViewStudent></ViewStudent>
        </Route>
        <Route path="/addStudents">
          <AddStudent></AddStudent>
        </Route>
        <Route path="/viewStudents">
          <ViewStudent></ViewStudent>
        </Route>
        <Route path="/editStudents">
          <EditStudent></EditStudent>
        </Route>
        <Route path="/deleteStudents">
          <DeleteStudent></DeleteStudent>
        </Route>
      </div>
    </div>
  );
};

export default Dashboard;
