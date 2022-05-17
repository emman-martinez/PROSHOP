import React, { useEffect } from 'react';
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
import { Message } from '../components/Message';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

export const CartScreen = ({ history, match, location }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }  
  }, [dispatch, productId, qty]);

  const removeFromCartHandle = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };
  
  return ( 
    <RowCartItems 
      cartItems={ cartItems }
      checkoutHandler={ checkoutHandler }
      dispatch={ dispatch }
      removeFromCartHandle={ removeFromCartHandle }
    /> 
  );
};

const RowCartItems = ({ 
  cartItems, 
  checkoutHandler, 
  dispatch, 
  removeFromCartHandle, 
}) => {
  const { Item } = ListGroup;
  const { Control } = Form;
  return (
    <Row>
      <Col md={ 8 }>
        <h1>Shopping Cart</h1>
        { 
          cartItems.length === 0 
            ? <Message>Your cart is empty <Link to='/'>Go Back</Link></Message>
            : <ListGroup variant='flush'>
              {
                cartItems.map(item => (
                  <Item key={ item.product }>
                    <Row>
                      <Col md={ 2 }>
                        <Image alt={ item.name } src={ item.image } fluid rounded/>
                      </Col>
                      <Col md={ 3 }>
                        <Link to={`/product/${ item.product }`}>{ item.name }</Link>
                      </Col>
                      <Col md={ 2 }>${ item.price }</Col>
                      <Col>
                        <Control 
                          as='select'
                          onChange={ (e) => dispatch(addToCart(item.product, Number(e.target.value))) }
                          value={ item.qty }
                        >
                          {
                            [...Array(item.countInStock).keys()].map(x => (
                              <option key={ x + 1 } value={ x + 1 }>
                                { x + 1 }
                              </option>
                            ))
                          }
                        </Control>
                      </Col>
                      <Col md={ 2 }>
                          <Button 
                            onClick={ () => removeFromCartHandle(item.product) }
                            type='button'
                            variant='light'
                          >
                            <i className='fas fa-trash'></i>
                          </Button>
                      </Col>
                    </Row>
                  </Item>
                ))
              }
            </ListGroup>
        }
      </Col>
      <Col md={ 4 }>
        <Card>
          <ListGroup variant='flush'>
            <Item>
              <h2>Subtotal ({ cartItems.reduce((acc, item) => acc + item.qty, 0) }) items</h2>
              ${ 
                cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)
              }
            </Item>
            <Item>
              <Button
                className='btn-block'
                disabled={ cartItems.length === 0 }
                onClick={ checkoutHandler }
                type='button'
              >
                Proceed To Checkout
              </Button>
            </Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};