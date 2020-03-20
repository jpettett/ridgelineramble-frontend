import React from 'react';
import { Button } from 'react-bootstrap';

function AuthForm({ credentials, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          value={credentials.name}
          onChange={handleChange}
          id="username"
          type="text"
          required
        ></input>
      </>

      <label htmlFor="email">Email:</label>
      <input
        name="email"
        value={credentials.email}
        onChange={handleChange}
        id="email"
        type="email"
        required
      ></input>
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        value={credentials.password}
        onChange={handleChange}
        id="password"
        type="password"
        required
      ></input>
      <Button className="login shadow p-1" variant="info" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default AuthForm;
