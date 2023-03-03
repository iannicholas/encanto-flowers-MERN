import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { UPDATE_TOTAL } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Button , Table, Container  } from 'react-bootstrap';
import CartQtyPicker from '../../components/CartQtyPicker';
import './style.css'

const stripePromise = loadStripe('pk_test_51L0VV3LPz0RFKIjd3EYrAXUdRZuvg8UiM7umz4piCUvWVKswkNXlX16hNBy4W4beVZo2xcCLNyXOffGD7MRzTMrv00ynQ9o8ej');

function Cart() {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function calculateItemTotal(item) {
    return item.price * item.purchaseQuantity
  }

  function submitCheckout() {
    dispatch({
      type: UPDATE_TOTAL,
      total: calculateTotal(),
    });
    idbPromise('total', 'put', calculateTotal());
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds, total: parseFloat(calculateTotal()) },
    });
  }
  return (
    <div className='shopping-cart my-5 pb-5'>
      <Container> 
      <h3>Your Cart Items</h3>
      <a href="/">Back to shopping</a>
      <Table striped>
        <thead className='table-header'>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item) => (
            <tr key={item._id}> 
              <td>
              <img src={item.image[0].img} alt={item.name} style={{width: "50px"}} className="thumbnail-img"></img>
              </td>
              <td>
                {item.name}
              </td>
              <td>
                ${item.price}
              </td>
              <td>{item.purchaseQuantity}</td>
              <td><CartQtyPicker item = {{...item}} /> </td>
              <td>${calculateItemTotal(item)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p style={{textAlign: "right"}}>Subtotal: ${calculateTotal()}</p>
      <p className='fineprint'>Tax and shipping cost will be calulated later.</p>
      <Button variant="success" onClick={submitCheckout}>Checkout</Button>
      </Container>
    </div>
  )
}

export default Cart;