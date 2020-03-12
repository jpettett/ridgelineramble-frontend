import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Landing.css';

const SignIn = () => (
  <div>
    <h3>Sign In</h3>
    <div className="signIn">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="user" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    <Link to="/signup">
      <h4>Not a member yet? Sign up for a free account!</h4>
    </Link>
  </div>
);

export default SignIn;
