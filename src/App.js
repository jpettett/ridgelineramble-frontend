import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ShowPost from './components/ShowPost';
import NewPost from './components/NewPost';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';
import EditPost from './components/EditPost';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  //user state
  const [user, setUser] = useState(null);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
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
          <div>
            <Switch>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/home" component={Home} />
              <Route
                exact
                path="/post/:id"
                render={props => {
                  if (user) {
                    return <ShowPost {...props} />;
                  } else {
                    return <Redirect to="/" />;
                  }
                }}
              />
              <Route
                exact
                path="/newpost"
                render={props => {
                  if (user) {
                    return <NewPost {...props} />;
                  } else {
                    return <Redirect to="/" />;
                  }
                }}
              />
              <Route
                exact
                path="/post/:id/edit"
                render={props => {
                  if (user) {
                    return <EditPost {...props} />;
                  } else {
                    return <Redirect to="/" />;
                  }
                }}
              />
            </Switch>
          </div>
        </main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
