import './Navbar.css'
import './Media.css'
import { useEffect } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import $ from 'jquery';
const Navbar =()=>{
    
    useEffect(() => {
        $('.ham-icon').on('click',function(){
            $('.ham-menu').addClass('ham-show').removeClass('ham-hide');
        });
        $('.close').on('click',function(){
            $('.ham-menu').removeClass('ham-show').addClass('ham-hide');
        })
    }, [])
    return(
        <nav className='navbar'>
            <div className='nav-container'>
           <div className='nav-left'>
                <p className='logo-font'>
                    Design
                </p>
                <p className='logo-font sub'>
                    Agency  
                </p>
            </div>
            <div className='nav-center'>
                <p className='nav-links'>Specialize in</p>
                <p className='nav-links'>Case Study</p>
                <p className='nav-links'>Process</p>
                <p className='nav-links'>Industries</p>
                
            </div>
            <div className='nav-right'>
                <button className='btn call'>
                    Schedule a call
                </button>
                <button className='btn '>
                    We are Hiring
                </button>
            </div>
            <AiOutlineMenu className="ham-icon" />
        <div className='ham-menu'>
                <div className='close-btn'>
                <AiOutlineClose className='close' />
                </div>
                <p className='ham-nav-links'>Specialize in</p>
                <p className='ham-nav-links'>Case Study</p>
                <p className='ham-nav-links'>Process</p>
                <p className='ham-nav-links'>Industries</p>
                <div className='ham-btn-container'>
                <button className='ham-btn-call'>
                    Schedule a call
                </button>
                <button className='ham-btn '>
                    We are Hiring
                </button>
                </div>
        </div>
            </div>
        </nav>
    );
}
export default Navbar