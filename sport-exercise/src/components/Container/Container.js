import React, { useEffect, useState } from 'react';
import './Container.css'
import logo from '../../images/827b3bfcc8bc92d96e208a25592186b1.jpg'
import Cardgym from '../Cardgym/Cardgym';
const Container = () => {
    const[exercises,setExercises]  =useState([])
    useEffect(()=>{
        fetch('gym.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))

    },[])
    return (
        <div className="container">
            <div className='row'>
            <div className="item-container   col-lg-8 col-sm-6  " >
                <header className='d-flex align-items-center mt-5 ms-5 pt-5 ps-5'>
                    <img src={logo} alt=""  className='logo '/>
                    <h2 className='text-info'>Fitness Whale</h2>
                </header>
                <div className='all-cards'>
                    {
                        exercises.map(exercise=><Cardgym exercise = {exercise}></Cardgym>)
                    }
                </div>
            </div>
            <div className="cart-container col-lg-4    ">
                <h3>Cart</h3>

            </div>
        </div>
        </div>
    );
};

export default Container;