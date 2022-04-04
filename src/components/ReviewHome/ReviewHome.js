import React from 'react';
import './ReviewHome.css';

const ReviewHome = ({ review }) => {
    const { name, ratings, comment, } = review;
    return (
        <div className='review'>
            <h3>{name}</h3>
            <p><span>Ratings: {ratings}</span></p>
            <p>comment: {comment}</p>
        </div>
    );
};

export default ReviewHome;