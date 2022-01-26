import React from 'react';
import Flag from './image/flag.svg';

const Footer = ()=>{
    return(
        <>
         <footer>
             <div className='container m-auto row'>
                 <div className='col-12 col-md-12 col-lg-6 col-xl-6 mt-4'>
                     
                     <ul>
                         <li>
                         <select>
                         <option> English</option>
                     </select>
                         </li>
                         <li>
                             <a href='#'>
                                 Home
                             </a>
                         </li>
                         <li>
                             <a href='#'>
                                 Privacy policy
                             </a>
                         </li>

                         <li>
                             <a href='#'>
                                 Terms of use 
                             </a>
                         </li>
                         <li>
                             <a href='#'>
                                 Content policy
                             </a>
                         </li>
                         <li>
                             <a href='#'>
                                 Code of Ethics
                             </a>
                         </li>
                     </ul>
                 </div>

                 <div className='col-12 col-md-12 col-lg-6 col-xl-6 mt-4'>
 
                 <ul style={{width:'80%'}}>
                         
                         <li>
                             <a href='#'>
                             <i class="fab fa-discord"></i>
                             </a>
                         </li>

                         <li>
                             <a href='#'>
                             <i class="fab fa-reddit-alien"></i>
                             </a>
                         </li>
                         <li>
                             <a href='#'>
                             <i class="fab fa-github"></i>
                             </a>
                         </li>
                         <li>
                             <a href='#'>
                             <i class="fab fa-twitter"></i>
                             </a>
                         </li>
                         &copy; 2022 DecLand
                     </ul>

                 </div>



               
             </div>
         </footer>
        </>

    )
}

export default Footer ;