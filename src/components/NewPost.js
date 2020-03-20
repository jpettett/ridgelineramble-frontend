import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';
import { APIURL } from '../config';
import { UserContext } from '../UserContext';

function NewPost() {
  const { user } = useContext(UserContext);
  const [post, setPost] = useState({});
  const [createdId, setCreatedId] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = function(event) {
    event.persist();
    const { name, value } = event.target;

    setPost({ ...post, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const url = `${APIURL}`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `JWT ${user.token}`
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => {
        setCreatedId(data.id);
      })
      .catch(() => {
        setError(true);
      });
  }
  //redirect to new post
  if (createdId) {
    return <Redirect to={`/post/${createdId}`} />;
  }
  //returns error message if component doesn't update
  if (error) {
    return <div>Sorry, there was a problem with your post</div>;
  }
  return (
    <Form post={post} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
}

export default NewPost;
