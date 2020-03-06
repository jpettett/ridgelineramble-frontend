import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';

function EditPost({ match }) {
  const url = `http://localhost:8000/post/${match.params.id}`;

  const [post, setPost] = useState({});
  const [deleted, setDeleted] = useState(false);

  const [createdId, setCreatedId] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setPost)
      .catch(console.error);
  }, []);

  const handleChange = function(event) {
    event.persist();
    const { name, value } = event.target;

    setPost({ ...post, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => {
        setCreatedId(data.id);
      })
      .catch(console.error);
  }

  function deletePost(event) {
    fetch(url, { method: 'DELETE' })
      .then(res => {
        setDeleted(true);
      })
      .catch(console.error);
  }

  if (deleted) {
    return <Redirect to="/" />;
  }

  if (createdId) {
    return <Redirect to={`/post/${createdId}`} />;
  }

  return (
    <>
      <Form
        post={post}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <button onClick={deletePost}>Delete Post</button>
    </>
  );
}

export default EditPost;
