
import './Cart.css'
import profileimg from '../../images/Shaon PP New Circle.png'
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Cart = (props) => {
    const{cart,setTime,breakTime} = props
    console.log(cart);
    let total = 0;
    // let quantity = 0;
    for(const exercise of cart){
        total = total+ exercise.time
        
    }
    // toast
    const notify = () => toast.success(' Congratuations! You have completed your session', {    
        width:'500px',
        height:'500px',
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    //toast
    return (
        <div className='ms-2 cart'>
            <div className="profile d-flex align-items-center ">
                <img  src={profileimg} alt="" />
                <div className='ms-3 mt-3'>
                <h5  className='mb-0'>Khairul Islam</h5>
                <p className='text-secondary mt-0'><small>Dhaka,Bangladesh</small></p>
                </div>
            </div>
            <div className="bg-clr info pt-3 ps-4 w-100 d-flex mt-3 ">
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
            {/* Break */}

            <div className='break  mt-4'>
                <h5 className='mb-4'>Add A Break</h5>
                <div className='bg-clr  p-3 rounded-1'>
                <button onClick={()=>{
                   setTime(10)
                }} className='rounded-5 p-2 me-3 hov border-0 '>10<small className=''>s</small></button>
                <button onClick={()=>{
                   setTime(20)
                }} className='rounded-5 p-2 me-3 hov border-0 '>20<small>s</small></button>
                <button onClick={()=>{
                   setTime(30)
                }} className='rounded-5 p-2 me-3 hov border-0'>30<small>s</small></button>
                <button onClick={()=>{
                   setTime(40)
                }} className='rounded-5 p-2 me-3 hov border-0'>40<small>s</small></button>
                <button onClick={()=>{
                   setTime(50)
                }} className='rounded-5 p-2 me-3 hov border-0'>50<small>s</small></button>
                </div>
            </div>

            {/* details */}
            <div className='details'>
                <h5 className='mb-2 mt-5'>Excercise Details</h5>

                <div className='mt-4 bg-clr pt-3 pb-2 rounded-1 ps-3 text'>
                    <p className='fw-bold'>Exercise time: {total}</p>
                </div>
                <div className='mt-4 bg-clr pt-3 pb-2 rounded-1 ps-3 text'>
                    <p className='fw-bold'>Break time: {breakTime}</p>
                </div>
            </div>

            <div>
            <button onClick={notify} type="button" className="btn btn-primary mt-4 w-75 ms-5 text-white fs-semibold">Activity Completed</button>
            <ToastContainer
            theme='dark'
position="center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
            </div>


        </div>
    );
};

export default Cart;