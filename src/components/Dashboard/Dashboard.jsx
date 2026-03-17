import React from "react";
import EmployeeList from "../EmployeList";
import EmployeeForm from "../EmployeForm";
import { useNavigate } from "react-router-dom";
import './DashBoard.css'

function Dashboard() {

    const navigate = useNavigate()

    const handleLogout = () => {
      navigate('/login')
      localStorage.removeItem('token')
    }

     return (
    <div className="dashboard-container">
      
      {/* Header */}
      <div className="dashboard-header">
        <h1>Employee Dashboard</h1>
        <span className="logout" onClick={() => handleLogout()}>Logout</span>
      </div>

      {/* Main Layout */}
      <div className="dashboard-content">

        {/* Left Side (Form) */}
        <div className="dashboard-card">
          <EmployeeForm />
        </div>

        {/* Right Side (List) */}
        <div className="dashboard-card">
          <EmployeeList />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;