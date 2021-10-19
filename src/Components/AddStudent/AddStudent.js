import { useContext, useState } from "react";
import studentContext from "../Store/Context";
import "./AddStudent.css";

const AddStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

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
    setId("");
    setName("");
    setRollNo("");
    setStudentClass("");
    setAddress("");
    setRegistrationSuccess(true);
  };

  return (
    <div className="text-dark AddStudent">
      {registrationSuccess && (
        <p className="success-registration">Registration Successfull !!</p>
      )}
      <h2 className="text-center">Student Registration</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group row mb-2">
          <label className="col-sm-2 col-form-label h2">Id</label>
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
          <label className="col-sm-2 col-form-label h2">Name</label>
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
          <label className="col-sm-2 col-form-label h2">RollNo</label>
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
          <label className="col-sm-2 col-form-label h2">Class</label>
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
          <label className="col-sm-2 col-form-label h2">Address</label>
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
          <button type="submit" className="add-btn btn btn-primary">
            Add Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
