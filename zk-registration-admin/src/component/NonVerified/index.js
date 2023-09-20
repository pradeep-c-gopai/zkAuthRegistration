import React, { useState, useEffect } from 'react';
import axiosClient from '../../Apiclient'
import "../CSS/Verified.css"

 
 
 
const NotVerified = () => {
  const [res1, setRes1] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = () => {
    axiosClient.post('api/notverified', {
 
    })
    .then((res1) => {
      setRes1(res1.data.result)
      console.log(res1.data.result)
    });
 
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>            
          </tr>
        </thead>
        <tbody>
          {res1.map((res1, index) => (
            <tr key={index}>
              <td>{res1.id}</td>
              <td>  {res1.name}</td>
              <td>{res1.email}</td>
              <td>{res1.address1}</td>
 
 
            </tr>
          ))}
        </tbody>
      </table>
 
    </div>
  );
};
 
export default NotVerified;