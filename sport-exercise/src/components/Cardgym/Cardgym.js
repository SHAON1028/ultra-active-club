import React from 'react';
import './Cardgym.css'

const Cardgym = (props) => {
   
    const {exercise,handleAddtoCart} = props
   
    
    const{id,name,img,time,description,age} = exercise
    return (
        <div className='gymcard '>
            <img className='img-size' src={img} alt="" />
            <div className='card-info ms-2 '>
                <h5 className=''>{name}</h5>
                <p className='text-secondary mb-0'>{description}</p>
                <p className='fw-semibold mb-0'>Age: {age}</p>
                <p className='fw-semibold'>Duration: {time}</p>

            </div>
            <div className='text-center w-50 '>
            <button onClick={()=>{
                handleAddtoCart(exercise)
            }} type="button" className="btn add-btn btn-primary w-50 mb-1">Add to List</button>
            </div>
        </div>

        
    );
};

export default Cardgym;