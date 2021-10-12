import React from "react";
const studentContext = React.createContext({
  students: [],
  addStudent: (student) => {},
  replaceStudents: (students) => {},
  editStudent: (student) => {},
  deleteStudent: (id) => {},
});

export default studentContext;
