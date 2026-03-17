import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../resources";
import "./EmployeDetails.css";
import { useSearchParams, useNavigate } from "react-router-dom";

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams()
  const empId = searchParams.get('id')

  const navigate = useNavigate()

  const fetchEmployee = async () => {
    try {
      const res = await API.get(`employees/${empId}/`);
      setEmployee(res.data); // adjust if needed
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  if (!employee) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div className="details-container">
      <div className="details-card">

        {/* Avatar */}
        <div className="avatar">
          {employee.name?.charAt(0).toUpperCase()}
        </div>

        <h2>{employee.name}</h2>

        <div className="divider"></div>

        <div className="detail-item">
          <span>Email</span>
          <p>{employee.email}</p>
        </div>

        <div className="detail-item">
          <span>Department</span>
          <p>{employee.department}</p>
        </div>

        <div className="detail-item">
          <span>Salary</span>
          <p>₹{employee.salary}</p>
        </div>

        <div className="detail-item">
          <span>ID</span>
          <p>{employee.id}</p>
        </div>

        {/* Buttons */}
        <div className="action-buttons">
          <button className="btn back-btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );


}

export default EmployeeDetails;