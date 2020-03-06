import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ShowPost from './components/ShowPost';
import NewPost from './components/NewPost';
import { Route } from 'react-router-dom';
import EditPost from './components/EditPost';

function App() {
  const [posts, setPosts] = useState([]);

  //Move this to Home component//
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
      <header>
        <h1>Ridgeline Ramble</h1>
      </header>
      <div>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>

        <Route
          exact
          path="/post/:id"
          render={routerProps => {
            return (
              <ShowPost
                getPosts={getPosts}
                posts={posts}
                match={routerProps.match}
              />
            );
          }}
        />
        <Route path="/newpost" render={() => <NewPost getPosts={getPosts} />} />
        <Route
          path="/post/:id/edit"
          render={routerProps => {
            return (
              <EditPost
                getPosts={getPosts}
                posts={posts}
                match={routerProps.match}
              />
            );
          }}
        />
      </div>
    </div>
  );
}

export default App;
