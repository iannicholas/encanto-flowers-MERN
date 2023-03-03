import React from 'react'
import { Row, Col ,} from 'react-bootstrap'
import './style.css'

export default function Hero() {

    return (
        <div>
            <figure className='position-relative'>
            <img src="/images/Hero_Image.jpg" alt="hero bouquet" className='img-fluid' />
                <figcaption className='fig-caption'>
                    <h2>Flower Delivery</h2>
                    <h4>Flowers for every occassion</h4>
                </figcaption>
            </figure>
           

            <Row className='d-flex'>
                <Col><a href="/categories/Romance"><img href="/categories/romance" src="/images/romance.jpg" className='category-img d-flex' alt="romatic flowers" /></a></Col>
                <Col><a href="/categories/Get%20Well"><img src="/images/get_well.jpg" className='category-img d-flex' alt="white and blue flowers"/></a></Col>
                <Col><a href="/categories/Sympathy"><img src="/images/simpathy.jpg" className='category-img d-flex' alt="sympathy" /></a></Col>

            </Row>
        </div>
    )

}
