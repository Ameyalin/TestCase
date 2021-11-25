// eslint-disable-next-line 
import React,{useState} from 'react'; 
//import {Link} from 'react-router-dom'; 
import './Navbar.css'; 
import IMDBLogo from '../media/IMDBLogo.png'; 

function Navbar() { 
    return (
        <> 
        <div className='navWrapper'>
            <a href='google.com'> <img className='navIMDBLink' src={IMDBLogo} alt="IMDB LOGO">
                </img>
            </a>
            <nav className='navLinkBar'>

                <a className='moviesLink' href="google.com">Movies</a>
                <a className='moviesLink' href="google.com">Movies</a>
                <a className='moviesLink' href="google.com">Movies</a>


            </nav>
        </div>
        </> 
        ); 
}

export default Navbar
