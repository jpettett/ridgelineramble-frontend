import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NewPost from './NewPost';

function Home() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    const url = `http://localhost:8000`;

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
      {posts.map(post => (
        <div key={post.id}>
          <Link to={'/post/' + post.id}>
            <ul>{post.title}</ul>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
