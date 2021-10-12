import { useContext, useState } from "react";
import studentContext from "../Store/Context";

const AddStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");

  const ctx = useContext(studentContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const studentDetails = {
      id,
      name,
      rollNo,
      studentClass,
      address,
    };
    ctx.addStudent(studentDetails);
  };

  return (
    <div>
      <h2 className="text-center">Student Registration</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group row mb-2">
          <label className="col-sm-2 col-form-label">Id</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Unique student Id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter student Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label className="col-sm-2 col-form-label">RollNo</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Rollno"
              value={rollNo}
              onChange={(event) => setRollNo(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label className="col-sm-2 col-form-label">Class</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter class"
              value={studentClass}
              onChange={(event) => setStudentClass(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
