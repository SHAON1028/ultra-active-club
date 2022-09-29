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
            <div className="info p-3 w-100 d-flex mt-3 ">
                <div className="wieght me-5">
                    <h4 className='mb-0'>75kg</h4>
                    <p className='text-secondary'>Weight</p>

                </div>
                <div className="height me-5">
                <h4 className='mb-0'>5.6</h4>
                    <p className='text-secondary'>Height</p>
                </div>
                <div className="age me-5">
                <h4 className='mb-0 '>24yrs</h4>
                    <p className='text-secondary'>Age</p>
                </div>
            </div>


        </div>
    );
};

export default Cart;