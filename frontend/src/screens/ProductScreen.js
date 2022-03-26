import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import products from '../products';
import { Rating } from '../components/Rating';

export const ProductScreen = ({ match }) => {
  const { Item } = ListGroup;
  const product = products.filter(p => p._id === match.params.id);

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
            src={ product[0].image } 
          />
        </Col>
        <Col md={ 3 }>
          <ListGroup variant='flush'>
            <Item>
              <h3>{ product[0].name }</h3>
            </Item>
            <Item>
              <Rating 
                text={`${ product[0].numReviews } reviews`}
                value={ product[0].rating }
              />
            </Item>
            <Item>Price: ${ product[0].price }</Item>
            <Item>Description: { product[0].description }</Item>
          </ListGroup>
        </Col>
        <Col md={ 3 }>
          <Card>
            <ListGroup variant='flush'>
              <Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${ product[0].price }</strong>
                  </Col>
                </Row>
              </Item>

              <Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    { product[0].countInStock > 0 ? 'In Stock' : 'Out Of Stock' }
                  </Col>
                </Row>
              </Item>
              <Item>
                <Button 
                  className='btn-block'
                  disabled={ product[0].countInStock === 0 }
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
