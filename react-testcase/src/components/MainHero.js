  // eslint-disable-next-line
import React,{useState} from 'react';
import './MainHero.css'; 
import Navbar from './Navbar';
import playBtn from '../media/play-button-svgrepo-com.svg'; 


function MainHero () { 
    return (
        <> 
            <div className='backgroundImage'>
                <Navbar />
                <div className='heroSection'>
                    <div className='scrollProgressBar'> </div>
                    <div className='heroTextContainer'>
                        <p className='heroTitle'>The Martian</p>
                        <div className='genreContainer'>
                            <p>Adventure</p>
                            <p>Adventure</p>
                            <p>Adventure</p>
                        </div>
                        <div className='trailerBtn'>
                              <div className='alignBox'>
                            <a href="google.se" className='trailerBtnText'> Watch Trailer 
                              
                            <img className='playBtnImage' src={playBtn} />
                              
                                </a>
                                    </div>

                        </div>
                        <p>In Theatres</p>
                        <p>In Theatres</p>
                    </div>
                </div>

            </div>
        </> 
        ); 
}

export default MainHero

