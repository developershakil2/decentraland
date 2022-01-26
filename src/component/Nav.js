import React from 'react';
import Logo from './image/logo.png'
const Nav = ()=>{
    return(
      <>
      



     


      <nav style={{background:'transparent'}} class="nav navbar navbar-expand-lg ">

<div style={{background:'transparent'}} className="container">
<a className="navbar-brand" href="#">
<img src={Logo} alt='logo'/>
</a>
<button style={{outline:"none", border:'none'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<i className="fas fa-arrow-circle-down text-light"></i>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="https://developer-shakil.web.app">MARKATPLACE</a>
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













      </>
    )

}
export default Nav;