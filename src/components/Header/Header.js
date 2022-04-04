import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='link-container'>
            <Link to="/home">Home</Link>
            <Link to="/review">Review</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blogs">Blogs</Link>
        </div>
    );
};

export default Header;