
import React, { useEffect, useState } from 'react'
// import { QUERY_ALL_PRODUCTS, QUERY_CATEGORIES } from '../../utils/queries';
// import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, ADD_CATEGORY, UPDATE_CATEGPRY, DELETE_CATEGORY } from '../../utils/actions';
// import { useStoreContext } from '../../utils/GlobalState';
// import {
//     UPDATE_CURRENT_CATEGORY,
// } from '../../utils/actions';
import { useParams } from 'react-router-dom';
import { Dropdown, DropdownButton, ButtonGroup, Container } from 'react-bootstrap'
// import './style.css' 

export default function CategoryMenu() {

  // const [state, dispatch] = useStoreContext();

  const { category } = useParams();
  const decodedCategory = category.replace("%20", " ")

  // const { categories } = state;

  const [categoryName, updateCategoryName] = useState('All');

  useEffect(() => {
          updateCategoryName(decodedCategory);
  }, [])

  // const handleClick = (id) => {
  //     dispatch({
  //         // type: UPDATE_CURRENT_CATEGORY,
  //         currentCategory: id,
  //     });
  //     updateCategoryName((categories.find((category)=> category._id === id)).Name);
  // };

  return (

    <div>
        <h1 className="p-5">What would you like to do today?</h1>
        <form>
    {/* <form onSubmit={handleFormSubmit}> */}
    {/* <div className="form-group">
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
    </div> */}
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
  </div>

    

  )
}
