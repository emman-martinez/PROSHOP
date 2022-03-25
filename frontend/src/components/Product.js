import React from 'react';
import { Card } from 'react-bootstrap';

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
                <div className='my-3'>
                    { product.raiting } from { product.numReviews } reviews
                </div>
            </Text>

            <Text as='h3'>${ product.price }</Text>
        </Body>
    </Card>
  );
};
