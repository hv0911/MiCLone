import React from 'react'
import '../Stylesheets/Navbar.css'
// import { Link } from 'react-router-dom'
import data from '../data/data.json';
// import * as data from '../data/data.json';

// logo:data.logo;

const search = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <a href="/">
                    <img id="logoImage" src={data.logo} alt="notfound" />
                </a>
            </div>
            <a className='navlinks' href='/miphones'>Mi Phone</a>
            <a className='navlinks' href='/redmiphones'>Redmi Phone</a>
            <a className='navlinks' href='/tv'>Tv</a>
            <a className='navlinks' href='/laptop'>Laptops</a>
            <a className='navlinks' href='/lifestyle'>Lifestyle & fitness</a>
            <a className='navlinks' href='/home'>Home</a>
            <a className='navlinks' href='/audio'>Audio</a>
            <a className='navlinks' href='/accessories'>Accessories</a>

            <div className='searchBox'>
                <input type='text' name="search" placeholder="Search Products" />
                {search}
            </div>

        </div>
    )





};

export default Navbar;