import { useContext, useState } from "react";
import studentContext from "../Store/Context";
import "./DeleteStudent.css";

const DeleteStudent = () => {
  const ctx = useContext(studentContext);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  return (
    <div className="DeleteStudent">
      {deleteSuccess && (
        <p className="success-registration">Deleted Successfully !!</p>
      )}
      <h2 className="text-dark mb-3">Student List</h2>
      <table className="table table-striped ">
        <thead className="myTable">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rollno</th>
            <th scope="col">Class</th>
            <th scope="col">Address</th>

            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {ctx.students.map((student) => {
            return (
              <tr key={student.id} className="myTable">
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.studentClass}</td>
                <td>{student.address}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      ctx.deleteStudent(student.id);
                      setDeleteSuccess(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteStudent;
