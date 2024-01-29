// src/FeedbackForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './FeedbackForm.css'; // Import custom styles

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFeedbackValid, setIsFeedbackValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    setIsNameValid(name.trim() !== '');
    setIsEmailValid(validateEmail(email));
    setIsFeedbackValid(feedback.trim() !== '');

    // Handle form submission logic here
  };

  const validateEmail = (email) => {
    // Add your email validation logic here
    // For simplicity, a basic email validation is used
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
      </Form>
    </motion.div>
  );
};

export default FeedbackForm;
