import React, { useState } from 'react';
import axiosClient from '../../Apiclient'
import { sendTokens } from './interact';
import "../CSS/University.css"

const Approve = () => {
 
  const [email, setEmail] = useState('');
  const [result, setResult] = useState([]);
 
  const handleSubmit = () => {
    axiosClient.post('api/approve', {
      email
    })
    .then((res) => {
        console.log(res);
        setResult(res.data.result)
        // sendTokens(res.data.result[0].address1)
        alert('Approved');
        setEmail('');
    });
  }
 
  return (
    <div>
      <div className='form-container'>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='But1'>
      <button type='button' onClick={handleSubmit}>Submit</button>
      </div>
  </div>
  );
}
 
export default Approve;