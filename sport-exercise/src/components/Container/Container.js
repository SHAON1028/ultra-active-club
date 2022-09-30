import React, { useEffect, useState } from 'react';
import './Container.css'

import Cardgym from '../Cardgym/Cardgym';
import Cart from '../Cart/Cart';
import  toast  from '../../utilities/toast'
import { getStoredCart } from '../../utilities/fakedb';
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

    useEffect(()=>{
        
        const storedCart = getStoredCart()
        console.log(storedCart);
        
      
         if(storedCart){
            
          setBreakTime(storedCart)
        }
         
    },[breakTime])

const setTime = (time)=>{
   setBreakTime(time)
   localStorage.setItem('breakTime',time)
   
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
            <div className="item-container pt-5 pe-0  col-lg-9 col-sm-12   back-clr" >
               
                <div className='all-cards mt-5 ps-5'>
                    {
                        exercises.map(exercise=><Cardgym exercise = {exercise} key={exercise.id} handleAddtoCart={handleAddtoCart}></Cardgym>)
                    }
                </div>
            </div>
            <div className="cart-container col-lg-3 mt-5 col-sm-12  ">
               
                    <Cart  cart={cart} setTime={setTime} breakTime={breakTime}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Container;
