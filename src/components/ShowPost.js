import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext } from '../UserContext';
import { APIURL } from '../config';
import '../ShowPost.css';

function ShowPost({ match }) {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `${APIURL}/post/${match.params.id}`;
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
      .catch(console.error);
  }, [user, match]);
  if (!posts) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <>
      <h2 className="title">{posts.title}</h2>
      <main>
        <h4 className="date">{posts.author}</h4>
        <p className="content">{posts.body}</p>
      </main>
      <Button
        className="editPost shadow p-3 mb-5 bg-white rounded"
        variant="light"
      >
        <Link to={`/post/${match.params.id}/edit`} className="editText">
          Edit Post
        </Link>
      </Button>
    </>
  );
}

export default ShowPost;
