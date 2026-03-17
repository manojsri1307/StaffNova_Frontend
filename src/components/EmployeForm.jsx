import React, { useContext, useEffect, useState } from "react";
import API from "../resources";
import { Context } from "./context/AppContext";
import './EmployeForm.css'

function EmployeeForm() {
  const [data, setData] = useState({
    name: "",
    department: "",
    email: "",
    salary: "",
  });

  const { updateEmp } = useContext(Context);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await API.post("employees/", data);
    window.location.reload(); // simple refresh
  };

  const handleUpdate = async (updateEmp) => {
    await API.put(`employees/${updateEmp?.id}/`, data)
    window.location.reload(); 
  }

  useEffect(() => {
    if (updateEmp) {
      setData(updateEmp);
      console.log("Innnnnnn", updateEmp)
      console.log("Object Keys", Object.keys(updateEmp))
    }
  }, [updateEmp]);

  return (
  <div className="form-container">
    <div className="form-card">
      <h2>{Object.keys(updateEmp).length === 0 ? "Add Employee" : "Update Employee"}</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={data.name}
      />

      <input
        name="department"
        placeholder="Department"
        onChange={handleChange}
        value={data.department}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={data.email}
      />

      <input
        name="salary"
        placeholder="Salary"
        onChange={handleChange}
        value={data.salary}
      />

      <button
        className={Object.keys(updateEmp).length === 0 ? "" : "update"}
        onClick={
          Object.keys(updateEmp).length === 0
            ? handleSubmit
            : () => handleUpdate(updateEmp)
        }
      >
        {Object.keys(updateEmp).length === 0 ? "Add" : "Update"}
      </button>
    </div>
  </div>
);


}

export default EmployeeForm;
