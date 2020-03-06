import React from 'react';
import './App.css';
import Home from './components/Home';
import ShowPost from './components/ShowPost';
import NewPost from './components/NewPost';
import { Route, Switch, Link } from 'react-router-dom';
import EditPost from './components/EditPost';

const App = () => (
  <>
    <header>
      <h1>Ridgeline Ramble</h1>
      <Link to="/">Home</Link>
      <Link to="/newpost">New Post</Link>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={ShowPost} />
        <Route exact path="/newpost" component={NewPost} />
        <Route exact path="/post/:id/edit" component={EditPost} />
      </Switch>
    </main>
  </>
);

export default App;
