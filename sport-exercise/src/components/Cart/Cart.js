import React from 'react';
import './Cart.css'
import profileimg from '../../images/Shaon PP New Circle.png'

const Cart = () => {
    return (
        <div className='ms-2'>
            <div className="profile d-flex align-items-center">
                <img  src={profileimg} alt="" />
                <div className='ms-3 mt-3'>
                <h5  className='mb-0'>Khairul Islam</h5>
                <p className='text-secondary mt-0'><small>Dhaka,Bangladesh</small></p>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;