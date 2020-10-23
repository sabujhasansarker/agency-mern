import React from 'react';
import { connect } from 'react-redux';
import { GET_ORDERS_QUERY } from './action/order';
import { useQuery } from '@apollo/react-hooks';

const App = ({ orders }) => {
  const { loading, data: orderData } = useQuery(GET_ORDERS_QUERY);
  console.log(orderData);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello boss</h1>
      </header>
    </div>
  );
};

const mapstatetoprops = (state) => ({
  orders: state.order.orders,
});

export default connect(mapstatetoprops)(App);
