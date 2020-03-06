import React from 'react';
import { Link } from 'react-router-dom';

function Home({ posts }) {
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
