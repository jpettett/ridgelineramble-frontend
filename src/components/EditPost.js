import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Button } from 'react-bootstrap';
import Form from './Form';
import { APIURL } from '../config';

function EditPost({ match }) {
  const url = `${APIURL}/post/${match.params.id}`;

  const [post, setPost] = useState({});
  const [deleted, setDeleted] = useState(false);

  const [createdId, setCreatedId] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `JWT ${user.token}`
      }
    })
      .then(response => response.json())
      .then(setPost)
      .catch(console.error);
  }, [url, user.token]);

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
        'content-type': 'application/json; charset=UTF-8',
        Authorization: `JWT ${user.token}`
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => {
        setCreatedId(data.id);
      })
      .catch(console.error);
  }

  //delete post and redirect to home page
  function deletePost(event) {
    fetch(url, {
      method: 'DELETE',
      headers: { Authorization: `JWT ${user.token}` }
    })
      .then(res => {
        setDeleted(true);
      })
      .catch(console.error);
  }

  if (deleted) {
    return <Redirect to="/home" />;
  }
  //redirect to post
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
      <Button
        className="deleteButton shadow p-1"
        variant="danger"
        onClick={deletePost}
      >
        Delete Post
      </Button>
    </>
  );
}

export default EditPost;
