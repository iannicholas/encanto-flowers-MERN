import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../utils/mutations';
import { idbPromise } from '../../utils/helpers';
import { Container } from 'react-bootstrap';
import './style.css'

function Success() {

  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const total = await idbPromise('total', 'get');
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products: products, total: parseFloat(total[total.length - 1])} });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Container className='success-container my-5'>
        <h2>Success!</h2>
        <p>Thank you for your purchase!</p>
        <p>You will now be redirected to the home page</p>
      </Container>
    </div>
  );
}

export default Success;
