import React, { useEffect } from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES, QUERY_USER } from '../../utils/queries';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  LOGOUT
} from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';
import './style.css';
import Auth from '../../utils/auth';


function EncantoNav() {

  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_CATEGORIES);
  
  const { data: userData } = useQuery(QUERY_USER);

  let user;

  if (userData) {
    user = userData.user;
  }

  const { categories, loggedIn } = state;

  const role = Auth.getRole();
  const loggedInBackup = Auth.loggedIn();
  console.log(role);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: data.categories,
      });
      data.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [data, loading, dispatch, loggedIn]);

  const handleNavClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });

  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {(loggedIn || loggedInBackup) && Auth.getRole() === 1 ? (<Navbar.Brand href="/adminpanel">
          <img
            alt=""
            src="/images/encanto_logo_nav.png"
            width="90"
            height="30"
            className="d-inline-block align-top"
          /></Navbar.Brand>) : (
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/images/encanto_logo_nav.png"
            width="90"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand> )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {loading ? (
                <div>
                  <NavDropdown.Item href="#" key='None'>'Categories loading...'</NavDropdown.Item>
                </div>
              ) : (
                <div>
                  {categories.map((category) => (
                    <NavDropdown.Item href={`/categories/${category.Name}`} key={category._id}
                      onClick={() => {handleNavClick(category._id)}}>
                        {category.Name}
                    </NavDropdown.Item>
                  ))}
                </div>
              )}
            </NavDropdown>
            {(loggedIn || loggedInBackup) && role == 1 ? (
              <Nav.Link href="/addproduct">Add Product</Nav.Link>
            ) : (<div></div>)}
            {(loggedIn || loggedInBackup) && role == 1 ? (
              <Nav.Link href="/addcategory">Add Category</Nav.Link>
            ) : (<div></div>)}
            {(loggedIn || loggedInBackup) && role == 1 ? (
              <Nav.Link href="/updateproduct">Update Product</Nav.Link>
            ) : (<div></div>)}
            {(loggedIn || loggedInBackup) && role == 1 ? (
              <Nav.Link href="/updatecategory">Update Category</Nav.Link>
            ) : (<div></div>)}
            {(loggedIn || loggedInBackup) && role < 2 ? (
              <Nav.Link href="/" onClick={() => {Auth.logout(); dispatch({ type: LOGOUT });}}>Logout</Nav.Link>
            ) : (
              <div></div>
            )}
            {(loggedIn || loggedInBackup) ? (
              <Nav.Link href="/cart">Cart</Nav.Link>
            ) : (
              <div></div>
            )}
            {(loggedIn || loggedInBackup) && role < 2 ? (
              <Nav.Link href="/userprofile">Profile</Nav.Link>
            ) : (
              <div></div>
            )}
            {!(loggedIn || loggedInBackup) ? (
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            ) : (
              <div></div>
            )}
            {!(loggedIn || loggedInBackup) ? (
              <Nav.Link href="/login">Sign In</Nav.Link>
            ) : (
              <div></div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EncantoNav;
