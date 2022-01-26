import React from 'react';
import Card1 from './image/card1.png';
import Card2 from './image/card2.jpg';
import Card3 from './image/card3.jpg';

const Six = ()=>{
    return(
        <>
        
        <div id='six'>
       <div className='second_home_wrapper container m-auto row'>
        <h2 id="cant">From the blog</h2>
        
        <div className=' card col-12 col-md-6 col-lg-4 col-xl-4'>
          <a className='nav-link text-dark' href='https://developer-shakil.web.appproject-updates/dao-committee-report-14/'>
          <div id="card1">
               <img src={Card1} alt='card'/>
               <p>
               <span>Jan 07</span>
               ANNOUNCEMENT DAO DAO-COMMITTEE-REPORT
               </p>
               <h4>
               Guest Post: DAO Committee Report #0014
               </h4>
           </div>
          </a>
        </div>




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








       </div>

     </div>

        
        </>
    )
}

export default Six;