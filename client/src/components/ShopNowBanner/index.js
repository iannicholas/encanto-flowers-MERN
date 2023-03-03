import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import './style.css'

export default function ShopNowBanner() {
    return (
        <div className='container-background'>
            <Row className='d-flex'>
                <Col className='m-auto mx-5'>
                    <h2>We make you look good</h2>
                    <h4>Choose one of our popular bouquets</h4>
                    <p>○ We deliver in San Diego: Poway, Ramona, Rancho Bernardo, Rancho Peñasquitos, Carmel Mountain, Scripps Ranch, Mira Mesa </p>
                    <p>○ Handmade: All our bouquets are craftly made with love.
                    </p>
                    <a href="/categories/Seasonal"><Button className='button-shop'>Shop Now!</Button></a>
                </Col>
                <Col><img className='img-circle' alt="happy flower lady" src="images/flower_circle.png" /></Col>
            </Row>
        </div>
    )
}