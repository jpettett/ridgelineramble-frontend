import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

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
          <Card
            className="postCard"
            bg="light"
            text="black"
            border="primary"
            style={{ width: '30rem' }}
          >
            <Link to={'/post/' + post.id}>
              <Card.Title>
                <ul>{post.title}</ul>
              </Card.Title>
            </Link>
            <Card.Text>By: {post.author}</Card.Text>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Home;
