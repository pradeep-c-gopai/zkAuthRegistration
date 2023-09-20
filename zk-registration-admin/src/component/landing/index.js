import React, { useState } from 'react';
import axiosClient from '../../Apiclient';
import './Landing.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [usn, setUsn] = useState('');
  const [college, setCollege] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    axiosClient.post('api/studentRegister', {
      name,
      email,
      usn,
      college,
      address
    })
    .then((res) => {
      if (res.data.alreadyRegistered) {
        alert('Already registered');
      } else {
        console.log('resdata', res);
        alert('Registration successful');
        setName('');
        setEmail('');
        setUsn('');
        setCollege('');
        setAddress('');
      }
    })
    .catch((err) => {
      console.log(err);
      alert('Already registered');
    });
  }
  

  return (
    <div className="landing-container">
      <div>
        <label>Name:</label>
        <input className="landing-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input className="landing-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>USN:</label>
        <input className="landing-input" type="text" value={usn} onChange={(e) => setUsn(e.target.value)} />
      </div>
      <div>
        <label>College:</label>
        <input className="landing-input" type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
      </div>
      <div>
        <label>Wallet Address:</label>
        <input className="landing-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button className="landing-button" type='button' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Register;
