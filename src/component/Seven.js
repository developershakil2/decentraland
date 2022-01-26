import React from 'react';

const Seven = ()=>{
    return(
    <>
     <div id='seven'>
       <div className='second_home_wrapper container m-auto row'>
          <div className='losei col-12 col-md-6 col-lg-6 col-xl-6 mt-4'>
         
          <h2 className='text-dark'>
          Contact us
       </h2>
       <p className='text-dark'>
       You’ll find us at all hours on Discord. You can also reach us through the usual channels.
       </p>
       <a className='getstarted' href="mailto:dev4web.bd@gmail.com">GET IN TOUCH</a>
          </div>


          <div className='losei col-12 col-md-6 col-lg-6 col-xl-6 mt-4'>
         
         <h2 className='text-dark'>
         Get the latest updates
      </h2>
      <p className='text-dark'>
      You’ll find us at all hours on Discord. You can also reach us through the usual channels.
      </p>
        

        <form style={{width:'100%', display:'flex', justifyContent:'space-around'}} method='POST'>
            <input className='form-control' placeholder='enter your email'/>
            <input style={{width:'90px' , marginLeft:'4px', background:'#f45', color:'#fff'}}  className='form-control' id='sub' type='submit' value='SIGN UP '/>

        </form>
         </div>





       </div>

     </div>
    </>
    )
}

export default Seven;