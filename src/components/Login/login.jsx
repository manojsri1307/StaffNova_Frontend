import React, { useState } from "react";
import API from "../../resources";
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("login/", data);
      console.log(res)
      localStorage.setItem("token", res.data.access);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
  <div className="login-container">
    <div className="login-card">
      <h2>Login</h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleLogin}>Login</button>
      <span className="createAcc" onClick={() => navigate('/register')}>Create Account? <span>Register</span></span>
    </div>
  </div>
);
}

export default Login;