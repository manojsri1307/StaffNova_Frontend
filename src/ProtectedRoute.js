import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const userToken = localStorage.getItem('token')

    return userToken ? <Outlet/> : <Navigate to="/login" replace/>
}

export default ProtectedRoute