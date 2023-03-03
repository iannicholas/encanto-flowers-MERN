
import React, { useEffect, useState } from 'react'
import { QUERY_CATEGORIES } from '../../utils/queries';
import { ADD_CATEGORY, UPDATE_CATEGPRY, DELETE_CATEGORY } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { useParams } from 'react-router-dom';
import { ButtonGroup, Container, Form } from 'react-bootstrap'
import './style.css' 

export default function CategoryMenu() {

  const [state, dispatch] = useStoreContext();

  const { category } = useParams();
  const decodedCategory = category.replace("%20", " ")

  const { categories } = state;

  const [categoryOperation, updateCategoryOperation] = useState('Add');

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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (

    <Container>
        <h1 className="p-5">What would you like to do today?</h1>
        <Form onSubmit={handleFormSubmit}>
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
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </Form>
  </Container>
  )
}
