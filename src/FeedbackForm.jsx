// src/FeedbackForm.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './FeedbackForm.css'; // Import custom styles

const FeedbackForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <motion.div
      className="feedback-form-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Feedback Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <br />
        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <br />
        <Form.Group controlId="formFeedback">
          <Form.Control as="textarea" rows={4} placeholder="Your Feedback" />
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
