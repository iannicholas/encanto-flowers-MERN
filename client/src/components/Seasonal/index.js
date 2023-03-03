import React from 'react'
import { Container, Row, Button, Card , Col} from 'react-bootstrap'
import './style.css'

export default function Seasonal() {
    return (
        <Container className='card-container'>
            <h2>Seasonal</h2>
        <p>Order it for your loved ones.</p>
            <Row xs={1} s={2} md={3} lg={4} className='g-4'>
            <Col>
            <Card className="single-card">
                   <a href="/product/6289c0707a47f1c348505bbe"><Card.Img variant="top" src="images/Bouquet05.jpg" style={{ paddingTop: '10px' }} /></a> 
                    <Card.Body>
                        <Card.Title className="product-name">Garden Pathway</Card.Title>
                        <Card.Text className="price">$35.99</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="single-card">
                <a href="/product/6289c0707a47f1c348505bc0"><Card.Img variant="top" src="images/Bouquet06.jpg" style={{ paddingTop: '10px' }} /></a>
                    <Card.Body>
                        <Card.Title className="product-name">Peace, Prayers & Blessings</Card.Title>
                        <Card.Text className="price">$59.99</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="single-card">
                <a href="/product/6289c0707a47f1c348505bc2"> <Card.Img variant="top" src="images/Bouquet07.jpg" style={{ paddingTop: '10px' }} /></a>
                    <Card.Body>
                        <Card.Title className="product-name">Cherished Memories</Card.Title>
                        <Card.Text className="price">$39.99</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="single-card">
                <a href="/product/6289c0707a47f1c348505bc4"><Card.Img variant="top" src="images/Bouquet09.jpg" style={{ paddingTop: '10px' }} /></a>
                    <Card.Body>
                        <Card.Title className="product-name">Vibrant Floral Medley</Card.Title>
                        <Card.Text className="price">$35.99</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <a href='/categories/Seasonal'><Button className='button-shopnow mx-auto'>Shop Now</Button></a>
</Row>
        </Container>


    )
}