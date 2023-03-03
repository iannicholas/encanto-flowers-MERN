import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import { Form , Button} from "react-bootstrap"
import { useStoreContext } from "../../utils/GlobalState";
import { LOGGEDIN } from '../../utils/actions';
import './style.css'

function Signup(props) {
  const [dispatch] = useStoreContext();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { data } = await addUser({
      variables: {
        userName: formState.userName,
        email: formState.email,
        password: formState.password,
        role: 0
      },
    });
    const token = data.addUser.token;
    Auth.login(token);  
    dispatch({
      type: LOGGEDIN
    });
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

      <h2>Signup</h2>

      <Form  className="signup-form mt-4" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="userName"
            name="userName"
            id="userName"
            placeholder="User Name"
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
            name="email"
            id="email"
            placeholder="Email"
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
        <Button className="button-submit" type="submit" variant="success">
          Submit
        </Button>

      </Form>
      <Link className="link-login" to="/login">Go to Login →</Link>
      {/* <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="userName" className="p-2">User Name</label> 
          <input
          
            type="userName"
            name="userName"
            id="userName"
            placeholder="User Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="email" className="p-2">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="pwd" className="p-2">Password</label>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <Button type="submit" variant="success">
          Submit
        </Button>
      </form> */}
    </div>
  );
}

export default Signup;
