import React, { useEffect /* , useState */ } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Button, 
  Card, 
  Col, 
  Image, 
  ListGroup, 
  Row, 
} from 'react-bootstrap';
// import axios from 'axios';
import { listProductDetails } from '../redux/actions/productActions';
import { Rating } from '../components/Rating';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';

export const ProductScreen = ({ match }) => {
  // const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { error, loading, product } = productDetails;
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //       const { data } = await axios.get(`/api/products/${ match.params.id }`);
  //       setProduct(data);
  //   };
  //   fetchProduct();
  // }, [match]);
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  
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
              : <RowProduct product={ product } />
      }
    </>
  );
};

const RowProduct = ({ product }) => {
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
  );
};