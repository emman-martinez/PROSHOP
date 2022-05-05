import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { listProducts } from '../redux/actions/productActions';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import { Product } from '../components/Product';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  
  return (
    <>
        <h1>Latest Products</h1>
        {
          loading 
            ? <Loader /> 
            : error 
              ? <Message variant='danger'>{ error }</Message>
              : <RowProducts products={ products } />
        }
    </>
  );
};

const RowProducts = ({ products }) => {
  return (
    <Row>
      {
          products.map(product => (
              <Col key={ product._id } sm={ 12 } md={ 6 } lg={ 4 } xl={ 3 }>
                  <Product product={ product }/>
              </Col>
          ))
      }
  </Row>
  );
};

// import React, { useState } from 'react';
// import axios from 'axios';
// const [products, setProducts] = useState({});
// useEffect(() => {
//   const fetchProducts = async () => {
//       const { data } = await axios.get('/api/products');
//       setProducts(data);
//   };
//   fetchProducts();
// }, []);