import React from 'react';
import './Home.css';
import air from '../../images/29136.jpg';
import useReviews from '../../Hook/useReview';
import ReviewHome from '../ReviewHome/ReviewHome';
import { Link } from 'react-router-dom';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews);
    return (
        <div>
            <div className='heading'>
                <div className='first-intro'>
                    <h1>Choose Best Air Condition</h1>
                    <h2>Choose us as a best partner</h2>
                    <p>The original products stock company. our commit is very clear.We always convenanted to give you best service and products.Visit our webpage. We have vast confidence to fullfill your demand.</p>
                </div>
                <div className='image'>
                    <img src={air} alt="" />
                </div>
            </div>
            <div className='review-corner'>
                <h2>Customer Review(3)</h2>
                <div className='review-container'>
                    {reviews.map(review => <ReviewHome review={review} key={review.id}></ReviewHome>)}
                </div>
                <button className='review-btn'><Link to="/review">See All Review</Link></button>
            </div>
        </div>
    );
};

export default Home;