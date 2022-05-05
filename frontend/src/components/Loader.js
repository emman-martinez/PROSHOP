import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loader = () => {
  return (
    <Spinner 
        animation='border' 
        role='status'
        style={{
            display: 'block',
            height: '100px',
            margin: 'auto',
            width: '100px',
        }}
    >
        <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};
