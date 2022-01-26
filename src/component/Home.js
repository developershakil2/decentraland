import React from 'react';
import 'react-js-stickynav/dist/index.css';
import Video from './video/home.mp4';
import ReactPlayer from 'react-player';
import Logo from './image/logo.png';
import SecondSec from './SecondSec';
import {Link} from 'react-router-dom';




const Nav = () => {
    

  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          z-index: 2000;
          padding: 20px;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          background: #ffffff;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    )
  }
  return (
      <>


 <video preload="auto" class="videot" id="videot" height="100%" preload/>
    <source src={Video} type="video/mp4" />
    <object data="BESTANDEN/video/tible.mp4" height="1080">
        <param name="wmode" value="transparent"/>
        <param name="autoplay" value="false" />
        <param name="loop" value="false" />
    </object>
 

{/* 
<div id='video-wrap' style={{width:"100%",  height:"100vh",  top:'0%', left:"0%", background:"#111"}} >
       


<ReactPlayer id="video"
        url={Video}
        width="100%"
       
        playing
        loop
        muted
        onStart={true}
        onEnded={true}
        config={{
          file: {
            attributes: {
              preload: "auto",
            },
          },
        }}
      />

</div>

<nav class="na ">

<div className="container">
<a className="navbar-brand" href="#">
<img src={Logo} alt='logo'/>
</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="https://developer-shakil.web.app">MARKATPLACE</Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://developer-shakil.web.app">BUILDER</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://developer-shakil.web.app">DOCS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://events.decentraland.org/">EVENTS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://dao.decentraland.org/en/">DAO</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://developer-shakil.web.app">BLOGS</a>
  </li>
</ul>





</div>


<div className='join'>
<a id='discord' href='https://decentraland.org/discord/'>JOIN OUR DISCORD</a>
<a id='explor' href='https://developer-shakil.web.app'>START EXPLORING</a>

</div>

</div>

</nav>




<div className='home_content container m-auto '>
        <h2>
        Welcome to Decentraland
        </h2>
        <p>
        Create, explore and trade in the first-ever virtual 
        </p>
        <p>world owned by its users.</p>
        <a className='getstarted' href='https://developer-shakil.web.app'>GET STARTED</a>
      </div>
     */}
<SecondSec style={{marginTop:"100px"}}/>


    
    </>
  )
}

export default Nav;
