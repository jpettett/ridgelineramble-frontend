import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../ShowPost.css';

function ShowPost({ match }) {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    const url = `http://localhost:8000/post/${match.params.id}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getPosts();
  }, []);

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
