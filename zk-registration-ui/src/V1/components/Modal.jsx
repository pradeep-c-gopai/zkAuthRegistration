import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from 'react';
import axiosClient from './ApiClient';
import classes from "./Header.module.css";

const VerticalModal = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [usn, setUsn] = useState('');
  const [college, setCollege] = useState('');
  const [address, setAddress] = useState('');
 
  const handleSubmit = () => {
    if(name === ''){
         alert("Enter name")
    }else{
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
  }
 
  return (
    <div >
      <Modal {...props} className={classes.ModalStyle}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name} onChange={(e) => setName(e.target.value)}
                placeholder=""
                autoFocus
 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                autoFocus
 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Wallet Address</Form.Label>
              <Form.Control
                type="text"
                value={address} onChange={(e) => setAddress(e.target.value)}
                placeholder=""
                autoFocus
 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
 
export default VerticalModal;