import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ShowPost from './components/ShowPost';
import NewPost from './components/NewPost';
import { Route, Switch, Link } from 'react-router-dom';
import EditPost from './components/EditPost';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => (
  <>
    <header>
      <Link to="/home">
        <img
          className="title"
          src={process.env.PUBLIC_URL + '/title-rr.png'}
          alt="Ridgeline Ramble"
        />
      </Link>
    </header>

    <main>
      <div className="comeOn">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/post/:id" component={ShowPost} />
          <Route exact path="/newpost" component={NewPost} />
          <Route exact path="/post/:id/edit" component={EditPost} />
        </Switch>
      </div>
    </main>
  </>
);

export default App;
