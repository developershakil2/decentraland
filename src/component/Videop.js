import React from 'react';
import Video from './video/home.mp4';
import VideoPlayer from "react-background-video-player";

const Videop = ()=>{
    return(
        <>
        <div style={{background:'transparent'}} className="App">
      <VideoPlayer
        className="video"
        src={Video}
        autoPlay={true}
        muted={true}
      />
     
    </div>

            

<div style={{background:'transparent'}} className='home_content container m-auto '>
        <h2>
        Welcome to Decland
        </h2>
        <p>
        Create, explore and trade in the first-ever virtual 
        </p>
        <p>world owned by its users.</p>
        <a className='getstarted' href='https://developer-shakil.web.app'>GET STARTED</a>
      </div>
        </>
    )
}

export default Videop;