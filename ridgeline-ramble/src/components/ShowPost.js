import React, { useState, useEffect } from 'react';
function ShowPost({ match }) {
  const [posts, setPosts] = useState([]);

  //retrieves all posts//
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
    <div>
      <h2>{posts.title}</h2>
      <div>
        <h2>By: {posts.author}</h2>
        <p>{posts.body}</p>
      </div>
    </div>
  );
}

export default ShowPost;
