import React from 'react';
import PropTypes from 'prop-types';

export const Rating = ({ color, text, value }) => {
  return (
    <div className='rating'>
        <Stars 
            color={ color }
            status={ 1 }
            value={ value }
        />
        <Stars 
            color={ color }
            status={ 2 }
            value={ value }
        />
        <Stars 
            color={ color }
            status={ 3 }
            value={ value }
        />
        <Stars 
            color={ color }
            status={ 4 }
            value={ value }
        />
        <Stars 
            color={ color }
            status={ 5 }
            value={ value }
        />
        <span>{ text && text }</span>
    </div>
  );
};

const Stars = ({ color, status, value }) => {
    const stars = value >= status ? 'fas fa-star' : value >= (status - 0.5) ? 'fas fa-star-half-alt' : 'far fa-star'
    return (
        <span>
            <i 
                className={ stars }
                style={{ color: color }}
            ></i>
        </span>
    );
};

Rating.defaultProps = {
    color: '#F8E825',
};

Rating.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};