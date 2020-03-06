import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import EditPost from './components/EditPost';

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
      <h2>{posts.title}</h2>
      <main>
        <h2>By: {posts.author}</h2>
        <p>{posts.body}</p>
      </main>
      <Link to={`/post/${match.params.id}/edit`}>Edit Post</Link>
    </>
  );
}

export default ShowPost;
