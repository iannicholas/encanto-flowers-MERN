import React from 'react'
import { Container, Row, Card , Col } from 'react-bootstrap'
import './style.css'

export default function Featured() {
    return (
        <Container className='card-container'>
            <h2>Featured Arrangements </h2>
            <p>Order for your loved ones on that special occassion.</p>

            <Row xs={1} s={2} md={3} lg={4} className='g-4'>
                <Col>
                
                <Card className="single-card">
                   <a href="/product/6289c0707a47f1c348505bb6" > <Card.Img variant="top" src="images/Bouquet01.jpg" style={{ paddingTop: '10px' }} /></a>
                    <Card.Body>
                        <Card.Title className="product-name">Lavender Garden Bouquet</Card.Title>
                        <Card.Text className="price">$29.99,</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="single-card">
                <a href="/product/6289c0707a47f1c348505bb8" > <Card.Img variant="top" src="images/Bouquet02.jpg" style={{ paddingTop: '10px' }} /></a>
                    <Card.Body>
                        <Card.Title className="product-name">Healing Blue & White</Card.Title>
                        <Card.Text className="price">$29.99</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="single-card">
                <a href="/product/6289c0707a47f1c348505bba" > <Card.Img variant="top" src="images/Bouquet03.jpg" style={{ paddingTop: '10px' }} /></a>
                    <Card.Body>
                        <Card.Title className="product-name">Spring Sentiment Bouquet</Card.Title>
                        <Card.Text className="price">$35.99</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="single-card">
                <a href="/product/6289c0707a47f1c348505bbc" > <Card.Img variant="top" src="images/Bouquet04.jpg" style={{ paddingTop: '10px' }} /></a>
                    <Card.Body>
                        <Card.Title className="product-name">Floral Embrace</Card.Title>
                        <Card.Text className="price">$48.99</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>


    )
}