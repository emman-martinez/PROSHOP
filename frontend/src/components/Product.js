import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Rating } from './Rating';

export const Product = ({ product }) => {
  const { Body, Img, Text, Title } = Card;
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${ product._id }`}>
            <Img src={ product.image } variant='top'/>
        </Link>

        <Body>
            <Link to={`/product/${ product._id }`}>
                <Title as='div'>
                    <strong>{ product.name }</strong>
                </Title>
            </Link>

            <Text as='div'>
                <Rating 
                    text={ `${ product.numReviews } reviews` } 
                    value={ product.rating } 
                />
            </Text>

            <Text as='h3'>${ product.price }</Text>
        </Body>
    </Card>
  );
};
