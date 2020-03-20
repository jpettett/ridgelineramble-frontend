import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { APIURL } from '../config';

function Home() {
  //set user context
  const { user, setUser } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  //get & display all posts

  useEffect(() => {
    if (user) {
      const url = `${APIURL}`;
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `JWT ${user.token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setPosts(data);
        })
        .catch(console.error);
    } else {
      setPosts([]);
    }
  }, [user]);

  if (!user) {
    return (
      <div>
        <h1>Welcome to Ridgeline Ramble!</h1>
        <p>
          <Link to="/signin">Login</Link> or <Link to="/signup">sign up</Link>{' '}
          for a free account to get started.
        </p>
      </div>
    );
  }

  return (
    <div>
      <nav>
        <Button
          className="signOut shadow p-1"
          variant="info"
          onClick={() => setUser(null)}
        >
          Sign Out
        </Button>

        <span className="userName">{`hello, ${user.user.username}!`}</span>
        <Button
          className="newPost shadow p-3 mb-5 bg-white rounded"
          variant="light"
        >
          <Link to="/newpost" className="postText">
            Create New Post
          </Link>
        </Button>
      </nav>
      {posts.map(post => (
        <div className="container" key={post.id}>
          <Card
            className="titleCard shadow p-1 mb-3 bg-white rounded"
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
