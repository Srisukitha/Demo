import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function FormValidation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameBorderColor, setNameBorderColor] = useState("");  
  const [phoneBorderColor, setPhoneBorderColor] = useState("");
  const [emailBorderColor, setEmailBorderColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (name.trim() === "") {
      setNameBorderColor("red");
    } else {
      setNameBorderColor("green");
    }
  
    if (phone.trim().length !== 10) {
    setPhoneBorderColor("red");
  } else {
    setPhoneBorderColor("green");
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
  setEmailBorderColor("red");
} else {
  setEmailBorderColor("green");
}
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">User Form Validation</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              border: `2px solid ${nameBorderColor}`, 
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              border: `2px solid ${phoneBorderColor}`,   // Dynamic border color
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              border: `2px solid ${emailBorderColor}`,   // Dynamic border color
            }}
          />
        </Form.Group>

        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>

      </Form>
    </Container>
  );
}

export default FormValidation;
