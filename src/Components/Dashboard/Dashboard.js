import { useEffect } from "react";
import { useContext } from "react";
import { Link, Route } from "react-router-dom";
import AddStudent from "../AddStudent/AddStudent";
import studentContext from "../Store/Context";

import ViewStudent from "../ViewStudent/ViewStudent";
import "./Dashboard.css";
let initial = true;
const Dashboard = () => {
  const ctx = useContext(studentContext);
  useEffect(() => {
    if (initial) {
      const getRequest = async () => {
        const response = await fetch(
          "https://react-student-project-default-rtdb.firebaseio.com/students.json"
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
      "https://react-student-project-default-rtdb.firebaseio.com/students.json",
      { method: "PUT", body: JSON.stringify(data) }
    );
    console.log(response);
  };
  return (
    <div className="Dashboard container  mt-3">
      <div className="border rounded bg-warning">
        <div className="row options">
          <div className="col-4 link d-flex align-items-center">
            <Link to="/addStudents">Add Students</Link>
          </div>
          <div className="col-4 link d-flex align-items-center justify-content-center">
            <Link to="/viewStudents">View Students</Link>
          </div>
          <div className="col-4 link d-flex align-items-center justify-content-end">
            <Link to="/editStudents">Edit Students</Link>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Route path="/addStudents">
          <AddStudent></AddStudent>
        </Route>
        <Route path="/viewStudents">
          <ViewStudent></ViewStudent>
        </Route>
        <Route path="/editStudents">
          <ViewStudent></ViewStudent>
        </Route>
      </div>
    </div>
  );
};

export default Dashboard;
