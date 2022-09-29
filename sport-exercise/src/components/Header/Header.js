import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='bg-clr mt-0 head'>
             <header className='d-flex align-items-center  ps-5 pt-5  '>
                    <img  src={logo} alt=""  className='logo '/>
                    <h2 className='text-info'>Power Fitness</h2>
                   <a className='ms-4 text-decoration-none' href="#blog">Blogs </a>
                </header>
        </div>
    );
};

export default Header;