import React from 'react';
import Martin from './image/martin.png';
import Anne from './image/anne.png';

const SecondSec = ()=>{
    return(

     <>
     <div id='secondhome'>
       <div className='second_home_wrapper container m-auto row'>
          <div className='losei col-12 col-md-6 col-lg-6 col-xl-6'>
          <h2 className='spacial'>Explore</h2>
          <h2>
        Lose yourself in an amazing, evolving world

       </h2>
<p>
    
Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members.


</p>

<a className='getstarted' href='https://developer-shakil.web.app'>START EXPLORING</a>
          </div>
          <div className='none_val col-md-6 col-lg-6 col-xl-6  '>
            
              <span className='martin'>Martin</span>
                 <img src={Martin} alt='martin'/>
                 <span className='anne'>Anne</span>
                 <img src={Anne} alt='Anne'/>
             
            
          </div>




       </div>

     </div>
     
     </>

    )
}

export default SecondSec;