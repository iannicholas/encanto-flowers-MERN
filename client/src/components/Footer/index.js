import React from 'react'
import './style.css'
import { Container , Row, Col , Image } from 'react-bootstrap';

export default function Footer () {
  return (
    <footer className="container-fluid background mt-5">
        <hr className="hr"></hr>
        <Container className='py-3'>
            <Row>
                <Col lg={6} md={6} sm={6} >
                <Image src="/images/encanto_logo_footer.png" className='d-inline-block align-top logo-footer mt-5 mb-5'/>
                
                </Col>
                <Col lg={3} md={3} sm={3}>
                <h5 className="h5">Categories</h5>
                <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/categories/Seasonal" className="nav-link p-0 links">
                Seasonal
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/categories/Romance" className="nav-link p-0 links">
                Romance
              </a>
            </li>
            <li className="nav-item mb-2 links">
              <a href="/categories/Get%20Well" className="nav-link p-0 links">
                Get Well
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/categories/Sympathy" className="nav-link p-0 links">
                Sympathy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/categories/Friendship" className="nav-link p-0 links">
                Friendship
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/categories/Funerals" className="nav-link p-0 links">
                Funerals
              </a>
            </li>
          </ul>
                </Col>
                <Col lg={3} md={3} sm={3} className="info-col">
                <h5 className="h5">Info</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
            <p className="links">Contact Us:
              <a href="tel:1231231234" className="nav-link p-0 links">
                123-123-1234
              </a></p>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Terms & Conditions
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 links">
                Privacy Policy
              </a>
            </li>
          </ul>
                
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

