import React from 'react';

function Form({ post, handleSubmit, handleChange }) {
  return (
    <div>
      <h3>New Post</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          name="title"
          id="title"
          onChange={handleChange}
          value={post.title}
        />
        <label htmlFor="author">Author:</label>
        <input
          name="author"
          id="author"
          onChange={handleChange}
          value={post.author}
        />
        <label htmlFor="synopsis">Body:</label>
        <textarea
          name="body"
          id="body"
          onChange={handleChange}
          value={post.body}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
