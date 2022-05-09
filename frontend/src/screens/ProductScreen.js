import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Button, 
  Card, 
  Col,
  Form,
  Image, 
  ListGroup, 
  Row, 
} from 'react-bootstrap';
import { listProductDetails } from '../redux/actions/productActions';
import { Rating } from '../components/Rating';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';

export const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { error, loading, product } = productDetails;
  
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${ match.params.id }?qty=${ qty }`);
  };
  
  if (product.rating === undefined) return null;

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {
          loading 
            ? <Loader /> 
            : error 
              ? <Message variant='danger'>{ error }</Message>
              : <RowProduct 
                  addToCartHandler={ addToCartHandler } 
                  product={ product } 
                  qty={ qty } 
                  setQty={ setQty } 
                />
      }
    </>
  );
};

const RowProduct = ({ addToCartHandler, product, qty, setQty }) => {
  const { Item } = ListGroup;

  return (
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
            { product.countInStock > 0 && <QtyItem product={ product } qty={ qty } setQty={ setQty } /> }
            <Item>
              <Button 
                className='btn-block'
                disabled={ product.countInStock === 0 }
                type='button'
                onClick={ addToCartHandler }
              >
                Add To Cart
              </Button>
            </Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

const QtyItem = ({ product, qty, setQty }) => {
  const { Control } = Form;
  const { Item } = ListGroup;
  const { countInStock } = product;

  return (
    <Item>
      <Row>
        <Col>Qty</Col>
        <Col>
          <Control 
            as='select'
            onChange={ (e) => setQty(e.target.value) }
            value={ qty }
          >
            {
              [...Array(countInStock).keys()].map(x => (
                <option key={ x + 1 } value={ x + 1 }>
                  { x + 1 }
                </option>
              ))
            }
          </Control>
        </Col>
      </Row>
    </Item>
  );
};

// import axios from 'axios';
// const [product, setProduct] = useState({});
// useEffect(() => {
//   const fetchProduct = async () => {
//       const { data } = await axios.get(`/api/products/${ match.params.id }`);
//       setProduct(data);
//   };
//   fetchProduct();
// }, [match]);