import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hook/useReview';
import ReviewHome from '../ReviewHome/ReviewHome';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='review-corner'>
            <h2>Opinion Of Customers</h2>
            <div className='review-container'>
                {reviews.map(review => <ReviewHome review={review} key={review.id}></ReviewHome>)}
            </div>
        </div>
    );
};

export default Review;