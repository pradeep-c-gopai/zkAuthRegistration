import React, { useState } from 'react';
import axiosClient from '../../Apiclient'
import "../CSS/University.css"

const University = () => {
 
  const [usn, setUsn] = useState('');
  const [result, setResult] = useState([]);
 
  const handleSubmit = () => {
    axiosClient.post('api/university', {
      usn
    })
    .then((res) => {
        console.log(res);
        setResult(res.data.result)
        // alert(res.data.result[0].grad_year)
      console.log(res.data.result[0].grad_year)
    });
  }
 
  return (
    <div>
      <div className='form-container'>
        <label>USN:</label>
        <input type="text" value={usn} onChange={(e) => setUsn(e.target.value)} />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>

      {result.length > 0 && (
        <div>
          <h1>Dashboard</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>USN</th>
                <th>Email</th>
                <th>Grad year</th>
              </tr>
            </thead>
            <tbody>
              {result.map((res, index) => (
                <tr key={index}>
                  <td>{res.id}</td>
                  <td>{res.name}</td>
                  <td>{res.usn}</td>
                  <td>{res.email}</td>
                  <td>{res.grad_year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default University;
 
