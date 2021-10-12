import { React, useReducer } from "react";
import studentContext from "./Context";

const studentReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedState = [...state.students, action.value];
    console.log(updatedState);
    return {
      students: updatedState,
    };
  }
  if (action.type === "REPLACE") {
    return {
      students: action.value,
    };
  }
  if (action.type === "EDIT") {
    const index = state.students.findIndex(
      (student) => student.id === action.value.id
    );
    const arr = [...state.students];
    arr.splice(index, 1, action.value);
    return {
      students: arr,
    };
  }
  if (action.type === "DELETE") {
    const index = state.students.findIndex(
      (student) => student.id === action.value
    );
    const arr = state.students
      .slice(0, index)
      .concat(state.students.slice(index + 1));
    return {
      students: arr,
    };
  }
};

const ContextProvider = (props) => {
  const [studentDispatch, dispatchFun] = useReducer(studentReducer, {
    students: [],
  });
  const addStudent = (student) => {
    dispatchFun({ type: "ADD", value: student });
  };
  const replaceStudents = (students) => {
    dispatchFun({ type: "REPLACE", value: students });
  };
  const editStudent = (student) => {
    dispatchFun({ type: "EDIT", value: student });
  };
  const deleteStudent = (id) => {
    dispatchFun({ type: "DELETE", value: id });
  };
  const context = {
    students: studentDispatch.students,
    addStudent: addStudent,
    replaceStudents: replaceStudents,
    editStudent: editStudent,
    deleteStudent: deleteStudent,
  };
  return (
    <studentContext.Provider value={context}>
      {props.children}
    </studentContext.Provider>
  );
};

export default ContextProvider;
