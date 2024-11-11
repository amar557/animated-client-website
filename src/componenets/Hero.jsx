import React from 'react'

function Hero() {
  return (
    <div className='bg-black pt-40 pb-20'>

    <div className='bg-black w-10/12 mx-auto'>
        <h1 className='first-letter:uppercase text-white text-[6vw] font-bold leading-[1] '>
            collectively, we started
        </h1>
        <h1 className=' text-[#7e7e7e] leading-[1] text-[6vw] font-bold '>
        the Great Ignore.
        </h1>
        <p className='text-[#7e7e7e] text-lg mt-2 mb-2 '>Growth at all costs wrecked outbound. The playbook of automated outreach gave <br /> way to mass messaging, burning bridges with buyers. It’s time to reconnect.</p>
        <button className='uppercase rounded-3xl  bg-white text-black px-5  tracking-wide py-3 relative btn1 overflow-hidden flex items-center justify-center mt-4 '> 
           
           <div className='relative btn-nested flex items-center justify-center overflow-hidden'>
               
             <p class="relative text1 z-10 tracking-widest"> get early access</p>
             <p class="absolute z-10 text2 tracking-widest"> get early access</p>
           </div>
                       <span class="item"></span>
                       </button>
    </div>
    
    </div>
  )
}

export default Hero