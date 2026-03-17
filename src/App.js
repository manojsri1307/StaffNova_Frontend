import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/Dashboard';
import EmployeeDetails from './components/EmployeDetails';
import Register from './components/Register/Register';

function App() {


  // const getData = async () => {
  //   const res = await axios.get(resources.API_URL + 'employees/',
  //     {
  //       headers: {
  //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczNzMwNzY1LCJpYXQiOjE3NzM3MjcxNjUsImp0aSI6ImZmN2ZlNDU3NTA4ZjQ3NGE4OTQ5ZmM2NTQzZjQxOTJiIiwidXNlcl9pZCI6IjMifQ.zXeo95L5wwUqMFt0pFHerbtti8iR_sxb_xeqat4dZ_s'
  //       }
  //     }
  //   )
  //   console.log("Resss", res)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])



  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/employeDetails' element={<EmployeeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
