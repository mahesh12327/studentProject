import { useContext, useState } from "react";
import studentContext from "../Store/Context";

const ViewStudent = () => {
  const ctx = useContext(studentContext);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Rollno</th>
            <th scope="col">Class</th>
            <th scope="col">Address</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {ctx.students.map((student) => {
            return (
              <tr key={student.id}>
                {isEdit && (
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student.id}
                      onChange={(event) => setId(event.target.value)}
                    ></input>
                  </td>
                )}
                {!isEdit && <td>{student.id}</td>}
                {isEdit && (
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student.name}
                      onChange={(event) => setName(event.target.value)}
                    ></input>
                  </td>
                )}
                {!isEdit && <td>{student.name}</td>}
                {isEdit && (
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={student.rollNo}
                      onChange={(event) => setRollNo(event.target.value)}
                    ></input>
                  </td>
                )}
                {!isEdit && <td>{student.rollNo}</td>}
                {isEdit && (
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student.studentClass}
                      onChange={(event) => setStudentClass(event.target.value)}
                    ></input>
                  </td>
                )}
                {!isEdit && <td>{student.studentClass}</td>}
                {isEdit && (
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student.address}
                      onChange={(event) => setAddress(event.target.value)}
                    ></input>
                  </td>
                )}
                {!isEdit && <td>{student.address}</td>}
                {!isEdit && (
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={(event) => {
                        event.preventDefault();
                        setId(student.id);
                        setName(student.name);
                        setRollNo(student.rollNo);
                        setStudentClass(student.studentClass);
                        setAddress(student.address);
                        setIsEdit(true);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                )}
                {isEdit && (
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={(event) => {
                        event.preventDefault();
                        const studentDetails = {
                          id,
                          name,
                          rollNo,
                          studentClass,
                          address,
                        };
                        ctx.editStudent(studentDetails);
                        setIsEdit(false);
                      }}
                    >
                      Update
                    </button>
                  </td>
                )}
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      ctx.deleteStudent(student.id);
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

export default ViewStudent;
