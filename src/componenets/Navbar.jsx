import React from 'react'
import { FaStarHalfStroke, FaStarOfLife } from "react-icons/fa6";
function Navbar() {
  return (
    <div className='bg-black w-full flex items-center justify-between text-white px-5 py-6'>
        <div className='flex items-center justify-start gap-2'>
            <p className='text-3xl'>

<FaStarOfLife/>
            </p>
<p className=' capitalize font-semibold text-3xl '>operator</p>
        </div>
        <ul className='flex items-center justify-center gap-4'>
         
                    <li className='uppercase text-base hover:cursor-pointer relative style-3'>video</li>
                    <li className='uppercase text-base hover:cursor-pointer style-3'>manifesto</li>
                    <li className='uppercase text-base hover:cursor-pointer style-3'>waitlist</li>
      
        </ul>
        <button className='uppercase rounded-3xl  bg-white text-black px-4 tracking-wide py-2 relative btn1 overflow-hidden flex items-center justify-center'> 
           
<div className='relative btn-nested flex items-center justify-center overflow-hidden'>
    
  <p class="relative tracking-widest text1 z-10"> get early access</p>
  <p class="absolute z-10 text2 tracking-widest"> get early access</p>
</div>
            <span class="item"></span>
            </button>
       


    </div>
  )
}

export default Navbar