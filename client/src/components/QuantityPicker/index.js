import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_QUANTITY } from '../../utils/actions';
import './style.css'


export default function QuantityPicker() {
    const [state, dispatch] = useStoreContext();
    const { currentQuantity } = state;

    const increaseQty = () => {
        dispatch({type: UPDATE_CURRENT_QUANTITY, currentQuantity: currentQuantity +1});
    };

    const decreaseQty = () => {
        if ( currentQuantity > 0) {
            dispatch({type: UPDATE_CURRENT_QUANTITY, currentQuantity: currentQuantity - 1});
        }
    };

    return (
   <Container className='button-container'>
            <Row>
                <Col lg={3}>
                    <Button onClick={()=>{decreaseQty()}} className="button-qty button-sel">
                        -
                    </Button>
                </Col>
               <Col lg={3}>{currentQuantity}</Col> 
                <Col lg={3}>
                    <Button onClick={()=>{increaseQty()}} className="button-qty button-sel">
                        +
                    </Button></Col>

            </Row>
            </Container>

    );
}