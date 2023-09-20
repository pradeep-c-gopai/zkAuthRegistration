import React, { useState, useEffect } from 'react';
import axiosClient from '../../Apiclient'
import "../CSS/GetAll.css"

 
 
 
const RegisteredStudents = () => {
  const [res, setRes] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = () => {
    axiosClient.post('api/getall', {
 
    })
    .then((res) => {
      setRes(res.data.result)
      console.log(res.data.result)
    });
 
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>USN</th>
            <th>College</th> */}
            <th>Status</th>
            <th>Address</th>            
          </tr>
        </thead>
        <tbody>
          {res.map((res, index) => (
            <tr key={index}>
              <td>{res.id}</td>
              <td>  {res.name}</td>
              <td>{res.email}</td>
              {/* <td>{res.usn}</td>
              <td>{res.college}</td> */}
              <td>{res.isVerified}</td>
              <td>{res.address1}</td>
 
 
            </tr>
          ))}
        </tbody>
      </table>
 
    </div>
  );
};
 
export default RegisteredStudents;