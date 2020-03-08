import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ShowPost from './components/ShowPost';
import NewPost from './components/NewPost';
import { Route, Switch, Link } from 'react-router-dom';
import EditPost from './components/EditPost';
import { Button } from 'react-bootstrap';

const App = () => (
  <>
    <header>
      <Link to="/">
        <img
          className="title"
          src={process.env.PUBLIC_URL + '/title-rr.png'}
          alt="Ridgeline Ramble"
        />
      </Link>
    </header>

    <nav>
      <Button
        className="newPost shadow p-3 mb-5 bg-white rounded"
        variant="light"
      >
        <Link to="/newpost">Create New Post</Link>
      </Button>
    </nav>
    <main>
      <div className="comeOn">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={ShowPost} />
          <Route exact path="/newpost" component={NewPost} />
          <Route exact path="/post/:id/edit" component={EditPost} />
        </Switch>
      </div>
    </main>
  </>
);

export default App;
