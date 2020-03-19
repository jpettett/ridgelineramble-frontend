import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthForm from './AuthForm';
import { UserContext } from '../UserContext';
import { APIURL } from '../config';

function SignIn(props) {
  const { user, setUser } = useContext(UserContext);
  const { state: historyState } = props.history.location;
  const initialState = {
    username: historyState ? historyState.name : '',
    email: historyState ? historyState.email : '',
    password: historyState ? historyState.password : ''
  };
  const url = `${APIURL}/token-auth/`;
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState(false);
  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      // .then(json => {
      //   localStorage.setItem('token', json.token);
      // })
      .then(setUser)
      .catch(setError);
  };

  if (user) {
    return <Redirect to="/home" />;
  }
  return (
    <div>
      <h3>Sign In</h3>

      <AuthForm
        credentials={credentials}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
export default SignIn;
