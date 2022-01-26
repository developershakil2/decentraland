import React from  'react';

import J from './image/jacket.png';
import H from './image/helmet.png';
import G from './image/sunglass.png';



const Fourth = ()=>{
    return(
        <>
          <div id='fourth'>
       <div className='second_home_wrapper container m-auto row'>
          <div className='losei col-12 col-md-6 col-lg-6 col-xl-6'>
          <h2 className='spacial'>Trade</h2>
          <h2>
          The virtual destination for digital assets

       </h2>
<p>
Buy and sell LAND, Estates, Avatar wearables and names in the Decentraland Marketplace: stocking the very best digital goods and paraphernalia backed by the ethereum blockchain

</p>

<a className='getstarted' href='https://developer-shakil.web.app'>START BROWSING</a>
          </div>
          <div className='none_val col-md-6 col-lg-6 col-xl-6  '>
           <img src={J} alt='jacket'/>
           <img src={H} alt='helmet'/>
           <img src={G} alt='sunglass'/>
            
          </div>




       </div>

     </div>
        </>
    )
}

export default Fourth ;