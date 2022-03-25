import React from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from './Rating';

export const Product = ({ product }) => {
  const { Body, Img, Text, Title } = Card;
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${ product._id }`}>
            <Img src={ product.image } variant='top'/>
        </a>

        <Body>
            <a href={`/product/${ product._id }`}>
                <Title as='div'>
                    <strong>{ product.name }</strong>
                </Title>
            </a>

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
