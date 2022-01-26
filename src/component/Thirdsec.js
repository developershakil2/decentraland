import React from 'react';
import Sp from './image/secondplat.png';
import Sc from './image/second_coin.png';
import Fp from './image/plat1.png';
import Fc from './image/firstcoin.png';

const Thirdsec = ()=>{
    return(
        <>
         <div id='thirdsec'>
       <div className='second_home_wrapper container m-auto row'>

       <div id='droping' className='none_val col-md-6 col-lg-6 col-xl-6  '>
            <img src={Sp} alt='sp'/>
            <img src={Sc} alt='sc'/>
            <img src={Fp} alt='fp'/>
            <img src={Fc} alt='fc'/>
            
            
            </div>
  



          <div className='losei col-12 col-md-6 col-lg-6 col-xl-6'>
          <h2 className='spacial'>   CREATE</h2>
          <h2>
      Test the limits of your imagination

       </h2>
<p>
Create scenes, artworks, challenges and more, using the simple Builder tool, then take part in events to win prizes. For more experienced creators, the SDK provides the tools to fill the world with social games and applications.

</p>
<div id='eb'>
    
<a className='getstarted  eb' href='https://developer-shakil.web.app'>START BUILDING</a>
<a className='getstarted ex eb' href='https://developer-shakil.web.app'>START DEVELOPING</a>
</div>
          </div>
        



       </div>

     </div>
        </>
    )
}

export default Thirdsec;