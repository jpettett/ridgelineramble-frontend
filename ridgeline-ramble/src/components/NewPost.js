import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';

function NewPost() {
  const [post, setPost] = useState({});
  const [createdId, setCreatedId] = useState(null);

  function getPosts() {
    const url = `http://localhost:8000`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPost(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const handleChange = function(event) {
    event.persist();
    const { name, value } = event.target;

    setPost({ ...post, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const url = 'http://localhost:8000';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => {
        setCreatedId(data.id);
      });
  }
  if (createdId) {
    return <Redirect to={`/post/${createdId}`} />;
  }
  return (
    <Form post={post} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
}

export default NewPost;
