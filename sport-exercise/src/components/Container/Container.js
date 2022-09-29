import React, { useEffect, useState } from 'react';
import './Container.css'
import logo from '../../images/logo.png'
import Cardgym from '../Cardgym/Cardgym';
import Cart from '../Cart/Cart';
import  toast  from '../../utilities/toast'
const Container = () => {
    const[exercises,setExercises]  =useState([])
    const[breakTime,setBreakTime] = useState(0)
    // cart
    const [ cart,setCart] = useState([])
    //cart end
    useEffect(()=>{
        fetch('gym.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))

    },[])
//breakTime

const setTime = (time)=>{
   setBreakTime(time)
}

//breakTime
//cart data pathabo
const handleAddtoCart=(selectedExercise)=>{
    
    const newCart =[...cart,selectedExercise]
    

    setCart(newCart)
   
    
    
}

// card data pathabo

   
    return (
        <div className="">
            <div className='row'>
            <div className="item-container   col-lg-9 col-sm-6   back-clr" >
                <header className='d-flex align-items-center mt-5 ps-5 pt-5  '>
                    <img  src={logo} alt=""  className='logo '/>
                    <h2 className='text-info'>Power Fitness</h2>
                </header>
                <div className='all-cards mt-5 ps-5'>
                    {
                        exercises.map(exercise=><Cardgym exercise = {exercise} key={exercise.id} handleAddtoCart={handleAddtoCart}></Cardgym>)
                    }
                </div>
            </div>
            <div className="cart-container col-lg-3 mt-4   ">
               
                    <Cart  cart={cart} setTime={setTime} breakTime={breakTime}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Container;