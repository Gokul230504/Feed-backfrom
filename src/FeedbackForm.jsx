// src/FeedbackForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './FeedbackForm.css'; 
import axios from 'axios'
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [responseMessage,setResponseMessage]=useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFeedbackValid, setIsFeedbackValid] = useState(true);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res=await axios.post("http://localhost:3001",{name:name,email:email,feedback:feedback})
    console.log(res.data)
    setResponseMessage("Succesful")
    setIsNameValid(name.trim() !== '');
    setIsEmailValid(validateEmail(email));
    setIsFeedbackValid(feedback.trim() !== '');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <motion.div
      className={`feedback-form-container ${isNameValid && isEmailValid && isFeedbackValid ? 'valid' : 'invalid'}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Feedback Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={isNameValid ? 'valid' : 'invalid'}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isEmailValid ? 'valid' : 'invalid'}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formFeedback">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className={isFeedbackValid ? 'valid' : 'invalid'}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit Feedback
        </Button>
        <p>{responseMessage}</p>
      </Form>
    </motion.div>
  );
};

export default FeedbackForm;
