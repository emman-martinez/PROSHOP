import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import { Rating } from '../components/Rating';

export const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});
  const { Item } = ListGroup;

  useEffect(() => {
    const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${ match.params.id }`);
        setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={ 6 }>
          <Image 
            alt={ product.name } 
            fluid
            src={ product.image } 
          />
        </Col>
        <Col md={ 3 }>
          <ListGroup variant='flush'>
            <Item>
              <h3>{ product.name }</h3>
            </Item>
            <Item>
              <Rating 
                text={`${ product.numReviews } reviews`}
                value={ product.rating }
              />
            </Item>
            <Item>Price: ${ product.price }</Item>
            <Item>Description: { product.description }</Item>
          </ListGroup>
        </Col>
        <Col md={ 3 }>
          <Card>
            <ListGroup variant='flush'>
              <Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${ product.price }</strong>
                  </Col>
                </Row>
              </Item>

              <Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    { product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }
                  </Col>
                </Row>
              </Item>
              <Item>
                <Button 
                  className='btn-block'
                  disabled={ product.countInStock === 0 }
                  type='button'
                >
                  Add To Cart
                </Button>
              </Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
