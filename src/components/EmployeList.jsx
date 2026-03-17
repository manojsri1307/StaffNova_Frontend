import React, { useContext, useEffect, useState } from "react";
import API from "../resources";
import { Context } from "./context/AppContext";
import { useNavigate } from "react-router-dom";
import "./EmployeList.css";
import axios from "axios";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const { setUpdateEmp } = useContext(Context);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    const res = await API.get("employees/");
    console.log(res);
    setEmployees(res.data.data);
  };

  const deleteEmployee = async (id) => {
    await API.delete(`employees/${id}/`);
    fetchEmployees();
  };

  const handleUpdate = (emp) => {
    console.log("Clickeddd");
    setUpdateEmp(emp);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="employee-container">
      <h2>Employees</h2>

      <div className="employee-grid">
        {employees.length === 0 ? (
          <h1 className="noRecords">No Records</h1>
        ) : (
          employees?.map((emp) => (
            <div key={emp?.id} className="employee-card">
              {/* Header */}
              <div className="card-header">
                <div className="avatar-sm">
                  {emp?.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <div className="emp-name">{emp?.name}</div>
                  <div className="emp-role">
                    {emp?.department || "Employee"}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="btn-group">
                <button
                  className="btn delete-btn"
                  onClick={() => deleteEmployee(emp?.id)}
                >
                  Delete
                </button>

                <button
                  className="btn update-btn"
                  onClick={() => handleUpdate(emp)}
                >
                  Update
                </button>

                <button
                  className="btn view-btn"
                  onClick={() => navigate(`/employeDetails?id=${emp?.id}`)}
                >
                  View
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
