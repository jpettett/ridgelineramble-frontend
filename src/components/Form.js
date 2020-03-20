import React from 'react';
import '../Form.css';
import { Button } from 'react-bootstrap';

function Form({ post, handleSubmit, handleChange }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name="title"
          id="title"
          onChange={handleChange}
          value={post.title}
        />
        <label htmlFor="author">Date:</label>
        <input
          name="author"
          id="author"
          onChange={handleChange}
          value={post.author}
        />
        <label className="bodyForm" htmlFor="body">
          Body:
        </label>
        <textarea
          name="body"
          id="body"
          onChange={handleChange}
          value={post.body}
        />

        <Button variant="info" className="submit shadow p-1" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
