import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import { LOGGEDIN } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import Auth from '../../utils/auth';
import { Form, Button } from "react-bootstrap"
import "./style.css"

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [dispatch] = useStoreContext();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      dispatch({
        type: LOGGEDIN
      });
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      window.location.assign('/');
    }, 1000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 mt-3">
      

      <h2>Login</h2>

      <Form className="signup-form mt-4" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control   type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            onChange={handleChange} />
        </Form.Group>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <Button className="button-submit" type="submit" variant="success">
          Submit
        </Button>
      </Form>

      <Link className="link-login mt-4" to="/signup">Don't have an account? Sign up here →</Link>


      {/* <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-2">
          <label className="p-2" htmlFor="email">Email address</label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label className="p-2" htmlFor="pwd">Password</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form> */}
    </div>
  );
}

export default Login;