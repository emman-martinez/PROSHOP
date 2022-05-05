import React, { useEffect /* , useState */ } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Product } from '../components/Product';
import { listProducts } from '../redux/actions/productActions';
// import axios from 'axios';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //       const { data } = await axios.get('/api/products');
  //       setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);
  
  return (
    <>
        <h1>Latest Products</h1>
        {
          loading 
            ? <h2>Loading...</h2> 
            : error 
              ? <h3>{ error }</h3>
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