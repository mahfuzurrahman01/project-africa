import React from 'react';
import logo from '../Assets/charity-logo-design-template-vector-26907941-removebg-preview.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      
            <div className="navbar bg-transparent h-44">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-2xl font-light'><Link to='/about'>About</Link></li>
                            <li className='text-2xl font-light'><Link to='/projects'>Projects</Link></li>
                            <li className='text-2xl font-light'><Link to='/support'>Support Us</Link></li>
                            <li className='text-2xl font-light'><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='flex gap-0 justify-start items-center'>
                        <img src={logo} alt="" className='lg:w-24 lg:h-20 md:w-20 md:h-16 w-16 h-10' />
                        <p className='lg:text-4xl text-2xl font-light uppercase text-lime-600'>Africa</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 flex gap-5">
                        <li className='text-2xl font-light'><Link to='/about'>About</Link></li>
                        <li className='text-2xl font-light'><Link to='/projects'>Projects</Link></li>
                        <li className='text-2xl font-light'><Link to='/support'>Support Us</Link></li>
                        <li className='text-2xl font-light'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className="cursor-pointer bg-lime-500 text-gray-100 text-xl rounded-3xl py-3 px-9">Donate</p>
                </div>
            </div>
     
    );
};

export default Navbar;