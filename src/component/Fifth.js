import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import Card1 from './image/card1.png';
import Card2 from './image/card2.jpg';
import Card3 from './image/card3.jpg';

const Fifth = ()=>{

   return(
        <>
            <div id='fifth'>
       <div className='second_home_wrapper container m-auto row'>
        <h2 id="cant">Can't decide where to start?</h2>
        

        <Tabs>
    <TabList>
      <Tab>UPCOMMING EVENTS</Tab>
      <Tab>POINT OF INTEREST</Tab>

      <a id="more" href='#' >MORE EVENTS<i style={{marginLeft:'8px'}} className="fas fa-chevron-right"></i> </a>
    </TabList>

    <TabPanel>

    
    <Splide options={ {
    rewind: true,
    
    gap   : '1rem',
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    arrows       : 'slider',
    height       : '15rem',
  } }
>





  
<SplideSlide>


<div className=' card col-12 col-md-6 col-lg-4 col-xl-4'>
       <a className='nav-link text-dark' href="https://developer-shakil.web.appannouncement/royalties-are-coming-to-decentraland/">
       <div id="card2">
             <img src={Card2} alt='card'/>



             <p>
             <span>Jan 05</span>
             ANNOUNCEMENT
             </p>
             
             <h4>
             Royalties are coming to Decentraland!
             </h4>
         </div>
       </a>
      </div>
</SplideSlide>











  
  <SplideSlide>
   
  <div className=' card col-12 col-md-6 col-lg-4 col-xl-4'>
         <a className='nav-link text-dark' href='https://developer-shakil.web.appannouncement/the-sky-is-moving/'>
         <div id="card3">
               <img src={Card3} alt='card'/>


               <p>
               <span>Dec 21</span>
               ANNOUNCEMENT
               </p>
               


<h4>The sky is moving!</h4>



           </div>
         </a>
        </div>

  </SplideSlide>



  <SplideSlide>


  <div className=' card col-12 col-md-6 col-lg-4 col-xl-4'>
         <a className='nav-link text-dark' href="https://developer-shakil.web.appannouncement/royalties-are-coming-to-decentraland/">
         <div id="card2">
               <img src={Card2} alt='card'/>



               <p>
               <span>Jan 05</span>
               ANNOUNCEMENT
               </p>
               
               <h4>
               Royalties are coming to Decentraland!
               </h4>
           </div>
         </a>
        </div>
  </SplideSlide>




</Splide>


    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

       </div>

     </div>


        </>
    )
}


export default Fifth ;



