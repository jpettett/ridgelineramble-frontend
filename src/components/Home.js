import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function Home() {
  const [posts, setPosts] = useState([]);
  //get & display all posts
  function getPosts() {
    const url = `https://young-spire-13129.herokuapp.com`;

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
      <>
        <Button
          className="newPost shadow p-3 mb-5 bg-white rounded"
          variant="light"
        >
          <Link to="/newpost" className="postText">
            Create New Post
          </Link>
        </Button>
      </>
      {posts.map(post => (
        <div
          className="postCard shadow p-1 mb-3 bg-white rounded"
          key={post.id}
        >
          <Card
            className="titleCard"
            bg="light"
            text="black"
            border=""
            style={{ width: '40rem' }}
          >
            <Link to={'/post/' + post.id}>
              <Card.Title>
                <ul>{post.title}</ul>
              </Card.Title>
            </Link>
            <Card.Text>{post.author}</Card.Text>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Home;
