import React from 'react';
import './Cardgym.css'

const Cardgym = (props) => {
    console.log(props.exercise);
    const {exercise} = props
   
    
    const{id,name,img,time,description,age} = exercise
    return (
        <div className='gymcard'>
            <img className='img-size' src={img} alt="" />
        </div>
    );
};

export default Cardgym;