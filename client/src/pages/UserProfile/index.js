import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { DELETE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './style.css'

function UserProfile() {
  const { data } = useQuery(QUERY_USER);
  let user;
  let orderHistoryTable = <div></div>
  let deleteUser = false;
  if (data) {
    user = data.user;
    orderHistoryTable = user.orders.map((order) => (
        <tr key={order._id}>
              <td>{order._id}</td>
              <td>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</td>
              <td> ${order.total} </td>
          </tr>));
  }

  const [useProgramMutation, {data: deletedData, loading, error}] = useMutation(DELETE_USER);

  function handleDelete() {
    if (deleteUser) {
        const user = useProgramMutation({ variables: {id: data.user._id}});
        Auth.logout();
      }
  }

  useEffect(() => {
      handleDelete();
  }, [deleteUser]);

  return (
    <div>
        {user ? (
            <Container className='order-history my-5'>
                <Link className='link-back' to="/">Back to Shopping →</Link>
                <h2 className='mt-3'>Hello, {user.userName}</h2>

                <h4 className='order-history'>Order History</h4>
                <Table className='table-order-history' striped>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistoryTable}
                    </tbody>
                </Table>

                <Button className='button-delete' onClick={()=> {useProgramMutation({ variables: {id: user._id}}); Auth.logout()}}>Delete Account</Button>
            </Container>
        ) : null}
    </div>
  );
}

export default UserProfile;
